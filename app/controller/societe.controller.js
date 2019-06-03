const db = require('../config/db.config.js');
const Societe = db.societes;
const SociUtilisat = db.sociUtilisats;

exports.create = (req, res) => { 
  Societe.create({  
    name: req.body.name
  }).then(societe => { 
    if(req.body.idUtilisateur){
		SociUtilisat.create({
		idSociete : societe.dataValues.id,
		idUtilisateur: req.body.idUtilisateur
		}).then(sociUtilisat => {
		res.send(sociUtilisat);
	  });
	}
	else{		
    res.send(societe);
	}
  });
};
 
exports.findAll = (req, res) => {
  Societe.findAll().then(societes => {
    res.send(societes);
	})
};
 
exports.findById = (req, res) => {  
  Societe.findByPk(req.params.societeId).then(societe => {
    res.send(societe);
  })
};
 
exports.update = (req, res) => {
  const id = req.params.societeId;
  Societe.update( { name: req.body.name}, 
           { where: {id: req.params.societeId} }
           ).then(() => {
           res.status(200).send("updated successfully a societe with id = " + id);
           });
};
 
exports.delete = (req, res) => {
  const id = req.params.societeId;
  Societe.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send('deleted successfully a societe with id = ' + id);
  });
};