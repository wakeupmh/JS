let getPoetry = require('../models/poetryModel')
async function handlePoetry(author, title, delimiter){
    let unifiedLines = "";
    let poetry = await getPoetry(author, title);
    for(let i in poetry.lines){
        unifiedLines += `${poetry.lines[i]}${delimiter}`
    }
    let result = Object.assign({}, poetry, {delimitedLines:unifiedLines})
    return result;
}

module.exports = handlePoetry;