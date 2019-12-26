const analyze = require('./analyze');

exports.assignRoutes = app => {
    app.post('/analyze', analyze.getSentiment);
}