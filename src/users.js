const usersData = require("./users.json");

/*function age(users) {
  return users.filter((user) => user.age >= 50);
}*/


/**
* @function getPhoneNumbersByStartingAge
* @param {array<users>} users La liste des utilisateurs
* @param  {number} age L'âge minimal à partir duquel récupérer les numéros de téléphone
* @returns {array<string>} Liste de tous les numéros trouvés
*/
function getPhoneNumbersByStartingAge(users, age){
  if(typeof(users)!='object' || typeof(age)!='number')throw('Types invalides!');
  if(users.length==0)throw('Aucun utilisateur!');
  foundPhoneNumbers = [];

  for(let i=0;i<users.length;i++){
    //Boucle sur tous les users

    if(users[i].age >= age){
      //S'il a l'âge minimal de la recherche
      foundPhoneNumbers.push(usersData[i].phone);
    }
  }
  return foundPhoneNumbers;
}

//console.log(age(usersData));
//console.log(getPhoneNumbersByStartingAge(usersData,50));

module.exports = {
  getPhoneNumbersByStartingAge:getPhoneNumbersByStartingAge
}
