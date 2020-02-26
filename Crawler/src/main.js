const { Worker }  = require('worker_threads');
const getData = require('./utils/getData');
let workDir = __dirname+"/dbWorker.js";

getData().then((res) => {
    const worker = new Worker(workDir); 
    console.log("Sending crawled data to dbWorker...");
    worker.postMessage(res);
    worker.on("message", (message) => {
        console.log(message)
    });
});


