const getPersonalityInside = require('../models/personalityModel');
exports.post = async (req, res) => {
    let author = req.body.author;
    let title = req.body.title;
    let delimiter = req.body.delimiter;
    let result = await getPersonalityInside(author, title, delimiter);
    
    res.status(200).send({personality: result});
};