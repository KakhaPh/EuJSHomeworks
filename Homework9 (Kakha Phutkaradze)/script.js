function interval() {
  k = setInterval(addbox, 100)
}
interval()

var count = 0;
function addbox() {
  var square = document.getElementById("square");
  var box = document.createElement("div")
  var colors = ["red","blue","purple","green","beige"]
  var randomColor = Math.floor(Math.random()*4)
  box.classList.add("box")
  box.style.backgroundColor = colors[randomColor]
  square.appendChild(box)
  count++ 
  if(count == 42) {
    clearInterval(k)
  }
}