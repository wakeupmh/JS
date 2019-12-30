const axios = require('axios');
const fetchData = async url => {
    console.log("Crawling data...")
    let response = await axios(url).catch((err) => console.log(err));
    
    if(response.status !== 200){
        console.log("Error occurred while fetching data");
        return;
    }
    return response;
}

module.exports = fetchData;