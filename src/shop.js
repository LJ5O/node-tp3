/**
 * @function
 * @param {number} id, id de l'utilisateur a rechercher
 * @param {Array} usersData, tableau contenant la liste des utilisateurs
 * Retourne les données de l'utilisateur de la liste qui correpondant à l'id
 */
function getUser(id, usersData) {
  for(let i=0;i<usersData.length;i++){
    if(usersData[i].id == id)return usersData[i]
  }
  return undefined;
}

module.exports = {
  getUser,
};
