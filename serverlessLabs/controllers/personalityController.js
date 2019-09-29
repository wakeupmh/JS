require('../models/personalityModel')
exports.post = (req, res) => {
    res.status(201).send(getPersonalityInside());
};