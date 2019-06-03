module.exports = (sequelize, Sequelize) => {
  const SociUtilisat = sequelize.define('sociUtilisat', {
    idSociete: {
    type: Sequelize.INTEGER
    },
    idUtilisateur: {
    type: Sequelize.INTEGER
    }
  });
  
  return SociUtilisat;
}