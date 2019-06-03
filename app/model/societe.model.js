module.exports = (sequelize, Sequelize) => {
  const Societe = sequelize.define('societe', {
    name: {
    type: Sequelize.STRING
    }
  });
  
  return Societe;
}