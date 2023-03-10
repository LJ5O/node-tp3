const usersData = require("./users.json");

function age(users) {
  return users.filter((user) => user.age >= 50);
}


/**
* @function getPhoneNumbersByStartingAge
* @param  {number} age L'âge minimal à partir duquel récupérer les numéros de téléphone
* @returns {array<string>} Liste de tous les numéros trouvés
*/
function getPhoneNumbersByStartingAge(age){
  foundPhoneNumbers = [];

  for(let i=0;i<usersData.length;i++){
    //Boucle sur tous les users

    if(usersData[i].age >= age){
      //S'il a l'âge minimal de la recherche
      foundPhoneNumbers.push(usersData[i].phone);
    }
  }
  return foundPhoneNumbers;
}

//console.log(age(usersData));
console.log(getPhoneNumbersByStartingAge(50));
