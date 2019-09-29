require('../models/poetryModel')
exports.post = async (req, res) => {
    let author = req.body.author;
    if(author){
        let poetry = await getPoetry(author);
        res.status(201).send(poetry);
    }else{
        res.status.send(400).send('Params error')
    }
};