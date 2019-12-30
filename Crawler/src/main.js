const { Worker }  = require('worker_threads');;
const fetchData = require('./fetchData');
const getData = require('./getData');
let workDir = __dirname+"/dbWorker.js";




getData().then((res) => {
    // start worker
    const worker = new Worker(workDir); 
    console.log("Sending crawled data to dbWorker...");
    // send formatted data to worker thread 
    worker.postMessage(res);

    // listen to message from worker thread
    worker.on("message", (message) => {
        console.log(message)
    });
});


async function fetchData(url){
    console.log("Crawling data...")

    // make http call to url
    let response = await axios(url).catch((err) => console.log(err));
    
    if(response.status !== 200){
        console.log("Error occurred while fetching data");
        return;
    }
    return response;

}

function formatStr(arr, dataObj){
    let regExp = /[^A-Z]*(^\D+)/ // regex to match all the words before the first digit
    let newArr = arr[0].split(regExp); // split array element 0 using the regExp rule
    dataObj[newArr[1]] = newArr[2]; // store object 
}