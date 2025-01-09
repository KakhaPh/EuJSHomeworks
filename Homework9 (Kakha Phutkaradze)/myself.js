function start() {
    k = setInterval(ball, 10)
}

function stop() {
    clearInterval(k)
}
var count = 0;
function ball() {
    var square = document.querySelector(".square")
    var ball = document.createElement("div")
    var ballColor = ["lightblue", "lightgreen" , "red", "green"]
    var randomColor = Math.floor(Math.random()*4)
    var square_width = parseInt(square.offsetWidth) -52
    var top = Math.floor(Math.random() * 350)
    var left = Math.floor(Math.random() * square_width)
    ball.classList.add("ball")
    ball.style.backgroundColor = ballColor[randomColor]
    ball.style.top = top + "px"
    ball.style.left = left + "px"
    square.appendChild(ball)
    ball.addEventListener("mouseover", function () {
        this.parentElement.removeChild(ball)
    })    
    count++
    if(count == 100) {
        clearInterval(k)
    }
}

