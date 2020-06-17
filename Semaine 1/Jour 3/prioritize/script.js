// 👉 Via le DOM, en Javascript,  vous allez devoir modifier la couleur des tâches en respectant la maquette: 
// 1 : vert
// 2 : jaune
// 3 : orange
// 4 : rouge

var priorityArray = document.getElementsByClassName('criticality');
console.log(priorityArray);

for (var i=0; i<priorityArray.length; i++) {
    var number = priorityArray[i].textContent;
    if (number == 1) {
        priorityArray[i].classList.add('green');
    } else if (number == 2) {
        priorityArray[i].classList.add('yellow');
    } else if (number == 3) {
        priorityArray[i].classList.add('orange');
    } else if (number == 4) {
        priorityArray[i].classList.add('red');
    }
}

// 👉 Mettre en place une mécanique permettant, au chargement, d’afficher uniquement les tâches de priorité 3 & 4.

var emergencyBtn = document.getElementById('emergency-btn');

emergencyBtn.addEventListener('click', function() {

    for (var i=0; i<priorityArray.length; i++) {
        var number = priorityArray[i].textContent;
        console.log(priorityArray.length)
        if ((number == 1) || (number == 2)) {
            priorityArray[i].parentNode.remove();
            console.log('removed')
            i--;
        } 
    }
})