const cheerio = require('cheerio');
const fetchData = require('./fetchData');

function formatStr(arr, dataObj){
    let regExp = /[^A-Z]*(^\D+)/ // regex to match all the words before the first digit
    let newArr = arr[0].split(regExp); // split array element 0 using the regExp rule
    dataObj[newArr[1]] = newArr[2]; // store object 
}

const getData = async () => {
    const url = "https://www.iban.com/exchange-rates";

    let res = await fetchData(url);
    if(!res.data){
        console.log("Invalid data Obj");
        return;
    }
    const html = res.data;
    let dataObj = new Object();

    const $ = cheerio.load(html);
    
    const statsTable = $('.table.table-bordered.table-hover.downloads > tbody > tr');

    statsTable.each(function() {
        let title = $(this).find('td').text(); // get the text in all the td elements
        let newStr = title.split("\t"); // convert text (string) into an array
        newStr.shift(); // strip off empty array element at index 0
        formatStr(newStr, dataObj); // format array string and store in an object
    });

    return dataObj;
}

module.exports = getData;