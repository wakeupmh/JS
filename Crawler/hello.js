const { Worker, isMainThread }  = require('worker_threads');
if(isMainThread){
    new Worker(__filename);
} else{
    console.log("Worker says: Hello World"); // prints 'Worker says: Hello World'
}