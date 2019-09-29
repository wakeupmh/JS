
const axios = require('axios');
async function getPoetry(author, title){
    return axios.get(`http://poetrydb.org/author,title/${author};${title}`)
    .then(result => {
        return result.data[0];
    })
    .catch(error => {
        console.log(error);
        return null;
    })
}
module.exports = getPoetry;