var controller = require('./controllers')
module.exports = function(app) {
    app.get('/cake', controller.home);
    app.post('/cake/new', controller.create);
    app.put('/cake/rate/:id', controller.update);
    app.get('/cake/:id', controller.oneCake);
}
