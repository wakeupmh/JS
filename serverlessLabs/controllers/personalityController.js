const getPersonalityInside = require('../models/personalityModel');
exports.post = (req, res) => {
    let author = req.body.author;
    let title = req.body.title;
    let delimiter = req.body.delimiter;
    getPersonalityInside(author, title, delimiter)
    res.status(200).send();
};