// Objectif
// Modifier le tableau d’objets ci-dessous pour modifier le format du numéro de téléphone, créer un type de contact admin et supprimer les doublons:

var contacts = [
    {
        prenom : 'john',
        telephone : '0611223344',
    },
    {
        prenom : 'elise',
        telephone : '0655667799'
    },
    {
        prenom : 'franck',
        telephone : '0612345678'
    },
    ,
    {
        prenom : 'elisa',
        telephone : '0612345678'
    }
 ]
// TELEPHONE
// Dans ce challenge, il faut modifier les numéros de téléphone afin de les afficher en format international +33612345678.
//👉 Le résultat doit être un NOUVEAU tableau.

// ADMIN
// 👉 Modifier votre tableau pour créer une nouvelle propriété “admin” pour chaque contact
// Cette propriété doit être à true si le contact est admin, à false sinon.
// 👉 Faire en sorte que John soit admin, les autres non.

// DOUBLONS
// 👉 Modifier votre tableau pour supprimer les doublons de numéro de téléphone.

// je duplique mon tableau
var newContacts = contacts.slice();
var franceIndicator = "+33";

for (var i=0; i<newContacts.length; i++) {
    if (newContacts[i]) {
        var numeroTel = newContacts[i].telephone;
        //si le premier chiffre est 0
        if (numeroTel.charAt(0) == 0) {
            //remplacer le tel par +33 + reste
            var reste = numeroTel.substring(1);
            var newTel = franceIndicator + reste;
            // remplacer dans l'objet
            newContacts[i].telephone = newTel;

        }
        // ADMIN
        newContacts[i].admin = "";
        if (newContacts[i].prenom == "john") {
            newContacts[i].admin = true;
        } else {
            newContacts[i].admin = false;
        }
    }   
}

for (var i=0; i< newContacts.length; i++) {
    if (newContacts[i]) {
        for (var j=0; j<newContacts.length; j++) {
            if (newContacts[j]) {
                if (i != j && (newContacts[i].telephone === newContacts[j].telephone)) {
                console.log('its a match');
                console.log('boucle numéro' + i)
                console.log(newContacts[i].telephone);
                delete newContacts[i];
                }
            }
        }
    }
}




console.log(newContacts)