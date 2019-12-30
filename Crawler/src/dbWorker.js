const { parentPort } = require('worker_threads');
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://web-crawler-17bdc.firebaseio.com"
});

let db = admin.firestore();
let date = new Date();
let currDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
parentPort.once("message", (message) => {
    console.log("Recieved data from mainWorker...");
    db.collection("Rates").doc(currDate).set({
        rates: JSON.stringify(message)
    }).then(() => {
        parentPort.postMessage("Data saved successfully");
    })
    .catch((err) => console.log(err))    
});