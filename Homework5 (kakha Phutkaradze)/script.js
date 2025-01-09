// პირველი დავალება
function work1_1(){
    var day1  = document.getElementById('today')
    day1.innerText = "დღეს არის კვირა"
}
function work1_2(){
    var day2  = document.getElementById('today')
    day2.innerText = "დღეს არის ორშაბათი"
}
function work1_3(){
    var day3  = document.getElementById('today')
    day3.innerText = "დღეს არის სამშაბათი"
}
function work1_4(){
    var day4  = document.getElementById('today')
    day4.innerText = "დღეს არის ოთხშაბათი"
}
function work1_5(){
    var day5  = document.getElementById('today')
    day5.innerText = "დღეს არის ხუთშაბათი"
}
function work1_6(){
    var day6  = document.getElementById('today')
    day6.innerText = "დღეს არის პარასკევი"
}
function work1_7(){
    var day7  = document.getElementById('today')
    day7.innerText = "დღეს არის შაბათი"
}

// მეორე დავალება
function view(num){
    document.getElementById("result").value+=num
}
function compute(){
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
} 

function Clr(){
    document.getElementById("result").value = ""
}

// მეხუთე დავალება
function work5(){
    var number  = document.getElementById('numbers')
    number.innerText = Math.floor(Math.random() * (30 + 1));
}

// მეექვსე დავალება
function work6(){
    var min = document.getElementById('input1').value;
    var max = document.getElementById('input2').value;
    var rand_answer = document.getElementById('rand_answer')
    let randnumbers = Math.floor(Math.random() * (max - min + 1)) + min;
    rand_answer.innerHTML = randnumbers;
}
function work7(){
      
    let table = document.getElementById('table')
    let column = document.getElementById('column').value
    let row = document.getElementById('row').value
    let images = document.getElementById('images').value
    let tbl = document.createElement("tbl");
    let imgs3 = ["./pctr/1.png","./pctr/2.png","./pctr/3.png","./pctr/4.png","./pctr/5.png","./pctr/6.png","./pctr/7.png","./pctr/8.png","./pctr/9.png","./pctr/10.png"]

    for (let j = 0; j < column; j++) {
      let addrows = document.createElement("tr");
  
      for (let i = 0; i < row; i++) {

        let table_cell = document.createElement("td");
        let pctr = document.createElement("img");
        pctr.style.width='75px'
        pctr.style.height='75px'
        pctr.src=imgs3[Math.floor(Math.random() * images)]
        table_cell.appendChild(pctr);
        addrows.appendChild(table_cell);
      }
      tbl.appendChild(addrows);
    }
    table.appendChild(tbl);
}



