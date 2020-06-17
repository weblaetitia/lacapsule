/*
    COOKIES
 */

// 👉 Au clic sur un cookie, affichez la nouvelle image avec le cookie croqué.
// 👉 Au second clic, le cookie ne doit plus s'afficher mais rester dans le DOM (Utiliser display:none).

var cookiesArray = document.getElementsByClassName('cookie');

for(var i=0; i < cookiesArray.length; i++) {
    cookiesArray[i].addEventListener('click', function() {
        console.log('cliiick');
        if (this.classList.contains('clicked')) {
            this.classList.add('d-none');
        } else {
            this.src = 'ressources/cookie-2.jpg' 
            this.classList.add('clicked');
        }
    });
}


