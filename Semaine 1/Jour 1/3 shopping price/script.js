// Objectif
// Calculer le montant du panier et afficher “frais de port gratuit” si le client bénéficie de l’offre promotionnelle.

var shopping = [
    { product : "Livre", unitPrice : 10.99, quantity:1},
    { product : "CD", unitPrice : 15.99, quantity:1},
    { product : "DVD", unitPrice : 23, quantity:3}
    ]
    
    var shopping2 =  [
    { product : "Livre", unitPrice : 10, quantity:1},
    { product : "CD", unitPrice : 5, quantity:2},
    { product : "DVD", unitPrice : 25, quantity:1}
    ]

// 👉 Pour chacun de ces paniers, calculez et affichez le total du panier.
// 👉 Si le total est supérieur à 60, affichez “frais de port offert”.
// 👉 Refaites les mêmes opérations en prenant en compte la quantité:


var totalShopping1 = 0;
var totalShopping2 = 0;

shopping.forEach(object => {
    totalShopping1 += object.unitPrice * object.quantity;
});
console.log('Panier 1')
console.log(totalShopping1 + ' €')
if (totalShopping1 > 60) {
    console.log('Frais de port offerts')
}
shopping2.forEach(object => {
    totalShopping2 += object.unitPrice * object.quantity;
});
console.log('Panier 2')
console.log(totalShopping2 + ' €')
if (totalShopping2 > 60) {
    console.log('Frais de port offerts')
}