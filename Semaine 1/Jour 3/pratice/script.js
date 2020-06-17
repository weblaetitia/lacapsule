 /* var myToDo1 = document.getElementById('todo-1');
myToDo1.addEventListener('click', function() {
    myToDo1.textContent = myToDo1.textContent.toUpperCase();
})
*/

var myToDos = document.getElementsByTagName('p');
console.log(myToDos);

for (var i= 0; i<myToDos.length; i++) {
    myToDos[i].addEventListener('click', function() {
        this.textContent = this.textContent.toUpperCase();
    })
}