/*
    Update 'total message' number
*/

// Get the number
var totalMessageNumber = document.getElementById('total-number');
console.log(totalMessageNumber.textContent);
// check how many message exists
var emailBoxes = document.getElementsByClassName('email-box');
// replace the html number by email-box number
totalMessageNumber.textContent = emailBoxes.length;



/*
    Delete message when 'trash' is pressed
*/

// get the trash
var trashesArray = document.getElementsByClassName('trash-btn');

// listen for trash-btn click

for (var i=0; i< trashesArray.length; i++) {
    trashesArray[i].addEventListener('click', function() {
        this.parentNode.parentNode.remove();
        totalMessageNumber.textContent -= 1;
    })
}

// trashesArray.forEach(element => 
// console.log(element)
// );
// ??? ne fonctionne pas ???

