// Objectif
// Formater une liste de prénom (première lettre en majuscule):

var contacts = ["john", "vanessa", "FRANCK"]

// 👉 Vous devez modifier le tableau ci-dessus pour mettre la première lettre de l'ensemble des prénoms en majuscule et le reste en minuscule.
//👉 Le résultat doit être un nouveau tableau:  ["John", "Vanessa", "Franck"].

// faire une boucle
// pour chaque nom, le mettre en Capitalize et remplacer l'entrée

for (var i=0; i<contacts.length; i++) {
    // Changer la première lettre
    var name = contacts[i];
    var cap = name[0].toUpperCase();
    // changer les ettre suivantes
    var reste = name.substring(1).toLowerCase();
    var newName = cap + reste;
    // corriger le tableau
    contacts[i] = newName;
}

console.log(contacts)
