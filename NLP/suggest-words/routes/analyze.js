const analyze = require('../business/analyze')

exports.getSentiment = (req, res) => {
    let data = req.body;

    if (!data.text) {
        res.status(400).send('Bad Request');
        return;
    }
    analyze.sentimentAnalysis(data.text)
        .then(result => {
            res.send({score:result});
        })
        .catch(err => res.status(400).send(err))
}