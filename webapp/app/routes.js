var Drawing = require('./models/drawings');

module.exports = function(app) {


    app.get('/drawinglist/drawings', function(req, res) {

        Drawing.find(function (err, drawings) {

            if (err)
                res.send(err);

            res.json(drawings);
        });
    });

    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html');
    });
};