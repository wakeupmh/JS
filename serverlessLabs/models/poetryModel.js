'use strict';
const axios = require('axios');
async function getPoetry(author, title){
    return axios.get(`http://poetrydb.org/author,title/${author};${title}`)
    .then(result => {
        console.log(result.data[0]);
        return result.data[0];
    })
    .catch(error => {
        console.log(error);
        return null;
    })
}
module.exports = getPoetry;