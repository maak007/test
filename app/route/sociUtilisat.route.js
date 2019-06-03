module.exports = function(app) {
 
    const sociUtilisats = require('../controller/sociUtilisat.controller.js');

    app.post('/sociUtilisats', sociUtilisats.create);
 
    app.get('/sociUtilisats', sociUtilisats.findAll);
 
    app.get('/sociUtilisats/:sociUtilisatId', sociUtilisats.findById);
	
    app.put('/sociUtilisats/:sociUtilisatId', sociUtilisats.update);
 
    app.delete('/sociUtilisats/:sociUtilisatId', sociUtilisats.delete);
}