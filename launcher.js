var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

const db = require('./app/config/db.config.js');

db.sequelize.sync({force: false}).then(() => {
  console.log('Drop and Resync with { force: true }');
});
 
require('./app/route/customer.route.js')(app);
require('./app/route/societe.route.js')(app);
require('./app/route/sociUtilisat.route.js')(app);

var server = app.listen(8083, function () {
 
  var host = server.address().address
  var host = '127.0.0.1'
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})