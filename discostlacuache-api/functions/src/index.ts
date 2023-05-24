// Importacion de modulos necesarios
import * as express from 'express';
import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
//import * as firestore from "@firebase/firestore";
// 
const app = express(); //Genero una app en express

type EntryType= {
    Autor : string
}
//Inicializo los datos de acceso a la App
admin.initializeApp({
    credential: admin.credential.cert('./permissions.json'),
    databaseURL: 'https://discostlacuache-default-rtdb.firebaseio.com'
});

const db = admin.firestore(); // Establecemos nuestra DB de FireStore

// Peticion GET Ejemplo
app.get('/', (request, response) => response.status(200).send('Hey there!'));

app.get('/dt_api/Productos', async (request,response) => {
    try {
        const doc = db.collection('Productos');
        
        const items = await doc.get();
        
        const res = items.docs;

        
        console.log(res);

        return response.status(200).json(res);
    } catch (error) {
        return response.status(500).send(error);
    }
});

app.get('/dt_api/Albums', async (request,response) => {
    try {
        const Albums: EntryType[] = [];

       const querySnapshot = await db.collectionGroup('Albums').where("Autor", "==", "Junior H").get();
       querySnapshot.forEach((doc : any) => Albums.push(doc.data()))
       return response.status(200).json(Albums);
    } catch (error) {
        return response.status(500).send(error);
    }
});

exports.app = functions.https.onRequest(app); // Exportar la App para su uso

export const helloWorld = onRequest((request, response) => {
   logger.info("Hello logs!", {structuredData: true});
   response.send("Hello from Firebase!");
 });