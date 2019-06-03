module.exports = function(app) {
 
    const societes = require('../controller/societe.controller.js');
 
    app.post('/societes', societes.create);
 
    app.get('/societes', societes.findAll);
 
    app.get('/societes/:societeId', societes.findById);
 
    app.put('/societes/:societeId', societes.update);
 
    app.delete('/societes/:societeId', societes.delete);
}