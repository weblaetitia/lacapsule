// Jouer au Uno

var lastPlay = {
    couleur : 'bleu',
    chiffre : '6',
}

var cards = [
{
    couleur : 'vert',
    chiffre : '6',
},
{
    couleur : 'rouge',
    chiffre : '6',
},
{
    couleur : 'bleu',
    chiffre : '9',
},
{
    couleur : 'vert',
    chiffre : '9',
}
]

/*
A partir du tableau de cards, vérifiez quelles sont les cartes que vous pouvez jouer.
Il faudra retourner un tableau des cartes que vous pouvez jouer.
Si vous ne pouvez pas jouer de carte, affichez “Je passe mon tour”.
*/

console.log('Deck :')
console.log(lastPlay)

// je crée un taleau vide des cartes jouable
var playable = [];

// une variable pour savoir s'il y a eu une victoire
var victory = false;


while (!victory) {
    // si une carte est jouable (cad égale a celle du deck) je la pousse dans le array playable
    cards.forEach(card => {
        if ((card.couleur === lastPlay.couleur) || (card.chiffre === lastPlay.chiffre)) {
            console.log('Je peux jouer les cartes :')
            console.log(card)
            playable.push(card)
        }
    });

    // si playable est vide = je peux pas jouer
    if (playable.length < 1) {
        console.log('Je passe mon tour')
    }

    // 👉 Retournez un tableau en ayant retirer la première carte que vous pouvez jouer.
    // je remplace le tablo lastPlay par ma carte
    // 👉 S’il ne vous reste plus qu’une seule carte dans votre jeu, affichez “Uno”.
    // si victoire je passe la var victory sur true

    if (playable.length > 2) {
        playable.shift();
        lastPlay = playable[0]
    }
    if (playable.length === 2) {
        playable.shift();
        lastPlay = playable[0]
        console.log('UNO!')
    }
    if (playable.length === 1) {
        console.log('J\'ai gagné !')
        lastPlay = playable[0]
        victory = true;
    }


console.log('Deck :')
console.log(lastPlay)

}