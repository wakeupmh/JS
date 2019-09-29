let getPoetry = require('../models/poetryModel')
exports.post = async (req, res) => {
    let author = req.body.author;
    let title = req.body.title;
    if(author){
        let poetry = await getPoetry(author, title);
        res.status(200).send(poetry);
    }else{
        res.status.send(400).send('Params error')
    }
};