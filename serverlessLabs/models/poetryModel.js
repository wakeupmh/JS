const axios = require('axios');
const getPoetry = async author =>{
    return new Promise(
        axios.post(`http://poetrydb.org/author/${author}:abs/`)
        .then(result => {
            return result
        })
        .catch(error => {
            console.log(error); 
        })
    );
}
exports.module = getPoetry;