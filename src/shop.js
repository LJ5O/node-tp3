/**
 * @function
 * @param {number} id, id de l'utilisateur a rechercher
 * @param {Array} usersData, tableau contenant la liste des utilisateurs
 * Retourne les données de l'utilisateur de la liste qui correpondant à l'id
 */
function getUser(id, usersData) {
  if(typeof(id)!='number')throw("L'identifiant doit être un entier positif");
  if(id < 0)throw("L'identifiant doit être un entier positif");

  if(typeof(usersData)!='object')throw('La liste des utilisateur doit être un tableau contenant des utilisateurs');
  if(usersData.length==0)throw("La liste des utilisateur est vide");

  for(let i=0;i<usersData.length;i++){
    if(usersData[i].id == id)return usersData[i]
  }
  throw("L'utilisateur "+id+" n'existe pas!");
}

module.exports = {
  getUser,
};
