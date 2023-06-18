import express from 'express';
import bodyParser from 'body-parser'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getDocs, getFirestore, doc, getDoc, setDoc, addDoc , query } from "firebase/firestore";
import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv'
import cors from 'cors'
import nodemailer from 'nodemailer';

dotenv.config();
const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true 
}));
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: true }));


const firebaseConfig = {
    apiKey: "AIzaSyCXjucrPlBpgIjM2EwQepFQCgSQIGXmoUg",
    authDomain: "discostlacuache.firebaseapp.com",
    databaseURL: "https://discostlacuache-default-rtdb.firebaseio.com",
    projectId: "discostlacuache",
    storageBucket: "discostlacuache.appspot.com",
    messagingSenderId: "682903252348",
    appId: "1:682903252348:web:c9cb3ac0d16196f3ed88f9",
    measurementId: "G-820NTXP0QM"
};

const db = getFirestore(initializeApp(firebaseConfig));


app.post('/RegistrarUsuario', async function (req, res) {
    // Validar si existe
    const email = req.body.email;
    const user = await getDoc(doc(db, "Usuarios", email));
    if (user.exists()) {
        console.log("Usuario ya registrado ❌");
        res.status(400).json({
            message: "Usuario ya registrado ❌"
        });
    } else {
        // Data Autorizacion
        const password = req.body.password;
        await setDoc(doc(db, "Usuarios", email), {});
        await setDoc(doc(db, "Usuarios", email, "Data", "Autorizacion"), {
            email: email,
            password: password
        })

        //Data Personal
        const nombres = req.body.nombres;
        const apellidos = req.body.apellidos;
        const telefono = req.body.telefono;
        await setDoc(doc(db, "Usuarios", email, "Data", "Personal"), {
            nombres: nombres,
            apellidos: apellidos,
            telefono: telefono
        })
        console.log("Registro exitoso");
        res.status(200).json({
            message: "Registro exitoso"
        });
    }
});

app.post('/setAlbum', async function(req, res){
    //Products/Musica/Albums/id_album
    const Autor = req.body.Autor;
    const Disquera = req.body.Disquera;
    const Fecha_Lanzamiento = req.body.Fecha_Lanzamiento;
    const Genero = req.body.Genero;
    const Nombre = req.body.Nombre;
    const URL_Photo = req.body.URL_Photo;
    const Digital = req.body.Digital;
    const Fisico = req.body.Fisico;
    console.log(URL_Photo)
    await addDoc(collection( db, "Products", "Music","Albums"),{
        Autor: Autor || null,
        Disquera: Disquera || null,
        Fecha_Lanzamiento: Fecha_Lanzamiento || null,
        Genero: Genero || null,
        Nombre: Nombre || null,
        URL_Photo: URL_Photo || null,
        Digital: Digital || null,
        Fisico: Fisico || null
    })

    console.log("Registro de Album exitoso");
    res.status(200).json({
        message: "Registro de Album exitosoRegistro de Album exitoso"
    })
})

app.post('/getAlbums', async function(req,res){
    const r_albums = query(collection(db,"Products", "Music","Albums"));
    const albums = await getDocs(r_albums);
    albums.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    })

    res.status(200).json({
        message: "Albums obtenidos"
    })
})

app.post('/IniciarSesion', async function (req, res) {
    // Validar si existe
    const email = req.body.email;
    console.log(req.body.email)
    const user = await getDoc(doc(db, "Usuarios", email));

    if (user.exists()) {
        // Data Autorizacion
        const password = req.body.password;
        const data_bd = await getDoc(doc(db, "Usuarios", email, "Data", "Autorizacion"))
        if (password == data_bd.data().password) {
            console.log("Acceso correcto ✅");
            res.status(200).json({
                message: "Acceso correcto ✅"
            });
        } else {
            console.log("Contraseña incorrecta ❌");
            res.status(400).json({
                message: "Contraseña incorrecta ❌"
            });
        }
    } else {
        console.log("Usuario no registrado ❌");
        res.status(400).json({
            message: "Usuario no registrado ❌"
        });
    }
});

app.post('/RecuperarPassword', async function(req,res){
    const email = req.body.email;
    const user = await getDoc(doc(db, "Usuarios", email));
    console.log(user)
    if (user.exists()) {
        // Data Autorizacion
        const password_temporal = cadenaAleatoria(8);
        await setDoc(doc(db, "Usuarios", email, "Data", "Autorizacion"), {
            email: email,
            password: password_temporal
        })
        console.log("Contraseña restablecida");
        EnviarMailResetPassword(email, password_temporal)
        res.status(200).json({
            message: "Contraseña restablecida",
            password_temporal: password_temporal
        })
    } else {
        console.log("Usuario no registrado ❌");
        res.status(400).json({
            message: "Usuario no registrado ❌"
        });
    }
})


const cadenaAleatoria = longitud => {
    // Nota: no uses esta función para cosas criptográficamente seguras. 
    const banco = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let aleatoria = "";
    for (let i = 0; i < longitud; i++) {
        // Lee más sobre la elección del índice aleatorio en:
        // https://parzibyte.me/blog/2021/11/30/elemento-aleatorio-arreglo-javascript/
        aleatoria += banco.charAt(Math.floor(Math.random() * banco.length));
    }
    return aleatoria;
};

function EnviarMailResetPassword(email, password_temporal){
    var message = {
        from: "eduardo.davila@cua.uam.mx",
        to: email,
        subject: "Reseteo de contraseña para DiscosTlacuache",
        html: `
        <h3>Hey <strong>${email}</strong> ✌ !!</h3> 
        <p>Se ha generado una contraseña temporal, favor de utilizar para acceder.</p> 
        ${password_temporal} <br>   
        <p> <strong> Se recomienda iniciar sesion y realizar el cambio desde la sección de mi perfil. </strong> </p>
        Saludos`
    }
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'eduardo.davila@cua.uam.mx',
            pass: 'Rocanlover12'
        }
    });

    transporter.sendMail(message, (error, info) => {
        console.log(message);
        console.log(info)
        if (error) {
            console.log("Error en el envio del email")
            console.log(error.message)
        } else {
            console("Email enviado");
        }
    })
}

app.post('/Auth', function (req, res) {
    const email = req.body.email;
    const accessToken = generateAccessToken(email);
    res.header('authorization', accessToken).json({
        message: "Usuario Autenticado",
        token: accessToken
    })

})

function generateAccessToken(email) {
    return jsonwebtoken.sign(
        {email},
        process.env.SECRET,
        { expiresIn: "10m" }
    );
}

function validateToken(req,res, next){
    const accessToken = req.headers['authorization'];
    if(!accessToken){
        res.send('Acceso denegado');
    }
    jsonwebtoken.verify(accessToken, process.env.SECRET, (err, email) => {
        if(err){
            res.send("Acceso denegado, Token expirado o incorrecto");
        }else{
            next();
        }
    })
}

app.get('/prueba', async function (req, res) {
    const docRef = doc(db, "Usuarios", "ziUwqOLP69aDS6KNA59i", "Data", "Autorizacion");
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data())
    res.send(docSnap.data())
});



app.get('/', function (req, res) {
    res.send('Hola Mundo!');
});

app.listen(3000, function () {
    console.log('API funcionando en localhost:3000 🚀');
});
