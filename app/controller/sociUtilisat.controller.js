const db = require('../config/db.config.js');
const SociUtilisat = db.sociUtilisats;
 

exports.create = (req, res) => {  

  SociUtilisat.create({
    idSociete: req.body.idSociete,
	idUtilisateur: req.body.idUtilisateur
  }).then(sociUtilisat => {    
    res.send(sociUtilisat);
  });
};
 
exports.findAll = (req, res) => {
  SociUtilisat.findAll().then(sociUtilisats => {
    res.send(sociUtilisats);
  });
};
 
exports.findById = (req, res) => {  
  SociUtilisat.findByPk(req.params.sociUtilisatId).then(sociUtilisat => {
    res.send(sociUtilisat);
  })
};
 
exports.update = (req, res) => {
  const id = req.params.sociUtilisatId;
  SociUtilisat.update( {  idSociete: req.body.idSociete, idUtilisateur: req.body.idUtilisateur }, 
           { where: {id: req.params.sociUtilisatId} }
           ).then(() => {
           res.status(200).send("updated successfully a sociUtilisat with id = " + id);
           });
};
 
exports.delete = (req, res) => {
  const id = req.params.sociUtilisatId;
  SociUtilisat.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send('deleted successfully a sociUtilisat with id = ' + id);
  });
};