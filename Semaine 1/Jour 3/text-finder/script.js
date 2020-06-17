// L'objectif est de développer un script, comptant combien de fois est présent un mot recherché dans un texte. Si aucune recherche n'est spécifiée, le script devra compter le nombre total de mots.

// compter le nombre de mot total
var myText = document.getElementById('textarea');
var words = myText.textContent.split(' ');

console.log(words.length);
