require('../models/personalityModel')
exports.post = (req, res) => {
    res.status(200).send(getPersonalityInside());
};