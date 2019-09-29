
let handlePoetry = require('../business/poetryBusiness')
exports.post = async (req, res) => {
    let author = req.body.author;
    let title = req.body.title;
    let delimiter = req.body.delimiter;
    if(author){
        let result = await handlePoetry(author, title, delimiter);
        console.log(result);
        res.status(200).send(result);
    }else{
        res.status.send(400).send('Params error')
    }
};