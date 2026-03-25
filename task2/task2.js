let increase = document.getElementById('in')
let reset = document.getElementById('re')
let decrease = document.getElementById('de')
let count = 0

increase.onclick = function(){
    count++
    document.getElementById('counter').textContent = count
}
decrease.onclick = function(){
    count--
    document.getElementById('counter').textContent = count
}
reset.onclick = function(){
    count = 0
    document.getElementById('counter').textContent = count
}


