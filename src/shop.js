/**
 * @function
 * @param {number} id, id de l'utilisateur a rechercher
 * @param {Array} usersData, tableau contenant la liste des utilisateurs
 * @returns {User} Données de l'utilisateur
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

/**
 * @function
 * @param {Array} products La liste de tous les produits
 * @returns {Object} Objet représentant les catégories d'objets
 */
function getProductsCategories(products){
  if(typeof(products)!='object')throw('Type invalide pour la liste des produits!');
  if(products.length==0)throw("La liste de produits est vide!");
  //Loop principale
  categories = {};
  for(let i=0;i<products.length;i++){
    if(!products[i].category || !products[i].title ||!products[i].stock)throw("Produit invalide dans la liste!");

    //Ajout des arrays dans l'objet qui sera retourné
    if(! categories[products[i].category])categories[products[i].category] = [];

    //Ajout du produit dans l'array
    categories[products[i].category].push({
      libelle: products[i].title,
      dispo: products[i].stock < 10 ? "low" : (products[i].stock < 50 ? "medium" : "high")
    });
  }
  return categories;
}

module.exports = {
  getUser,
  getProductsCategories
};
