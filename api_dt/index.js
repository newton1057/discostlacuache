import express from 'express';
import bodyParser from 'body-parser'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getDocs, getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const app = express();
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
    }
});

app.post('/IniciarSesion', async function (req, res) {
    // Validar si existe
    const email = req.body.email;
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
