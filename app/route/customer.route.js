module.exports = function(app) {
 
    const customers = require('../controller/customer.controller.js');
 
    app.post('/customers', customers.create);
 
    app.get('/customers', customers.findAll);
 
    app.get('/customers/:customerId', customers.findById);
 
    app.put('/customers/:customerId', customers.update);
 
    app.delete('/customers/:customerId', customers.delete);
}