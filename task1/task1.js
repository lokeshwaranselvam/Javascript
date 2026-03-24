document.getElementById('btn').onclick = function() {
    const PI = 3.14159
    let radius = document.getElementById('radius').value 
    let r = Number(radius)
    let circumference = 2*PI*r
    document.getElementById('res').textContent = `The circumference of the circle is ${circumference}`
}
