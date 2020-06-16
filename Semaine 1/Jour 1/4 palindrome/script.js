// Objectif
// Trouver l’intrus.

// Il s'agit d'un texte ou d’un mot dont l'ordre des lettres reste le même qu'on le lise de gauche à droite .
// Exemple: radar.
// 👉 Dans le tableau suivant filtrer les palindromes:
// 👉 Le résultat doit être un nouveau tableau contenant uniquement les palindromes

var tableau = ['bonjour', 'kayak', 'salut','ressasser', 'toto', 'javascript','été', 'algo'];
console.log(tableau);


for (var i=0; i<tableau.length; i++) {
    var word = tableau[i];
    var length = word.length;
    // si premiere lettre != a dernièrel lettre : on suprime
    if (word[0] != word[length-1]) {
        console.log(word + ' n\'est pas palindrome')
        tableau.splice(i, 1)
    }
}


console.log(tableau);
console.log('something else');