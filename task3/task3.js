const max = 6;
const min = 1;

let buttonclick = document.getElementById('roll');

buttonclick.onclick = function() {
    let roll = Math.floor(Math.random() * max ) + min;
    document.getElementById('num').textContent = roll;
}