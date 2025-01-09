// პირველი დავალება
function work1(){
    var userchoice1 = alert('გამარჯობა, მე ვარ დიალოგური ფანჯარა alert')
    if(userchoice1 = true){
        document.write("<h1>კეთილი იყოს თქვენი მობრძანება საიტზე!!!!</h1>")
    }
}

// მეორე დავალება
function work2(){
    var userchoice2 = confirm('გამარჯობა, გსურთ გაიგოთ ვებ გვერდის შესახებ უფრო მეტი???')
    var n = document.getElementById("demo")
    var n1 = document.getElementById("demo2")
    if(userchoice2 == true){
        document.body.style.backgroundColor = "#000066"
        n.style.display = "block"
    }
    else{
        document.body.style.backgroundColor = "#000066"
        n.style.display = "none"
        n1.style.display = "block"
    }
}

// მესამე დავალება
function work3(){
    var userchoice3 = prompt('შემოიტანე კვირის დღე (1,2,3,4,5,6,7)')
    var Monday = document.getElementById("k-Monday")
    var Tuesday = document.getElementById("k-Tuesday")
    var Wednesday = document.getElementById("k-Wednesday")
    var Thursday = document.getElementById("k-Thursday")
    var Friday = document.getElementById("k-Friday")
    var Saturday = document.getElementById("k-Saturday")
    var Sunday = document.getElementById("k-Sunday")
    var notthere = document.getElementById("k-not-there")
    var cancel = document.getElementById("k-cancel")
    if(userchoice3 == 1){
        document.body.style.backgroundColor = "lightgrey"
        Monday.style.display = "block"
        notthere.style.visibility = "hidden"
    }
    if(userchoice3 == 2){
        document.body.style.backgroundColor = "lightgrey"
        Tuesday.style.display = "block"
        notthere.style.visibility = "hidden"
    }
    if(userchoice3 == 3){
        document.body.style.backgroundColor = "lightgrey"
        Wednesday.style.display = "block"
        notthere.style.visibility = "hidden"
    }
    if(userchoice3 == 4){
        document.body.style.backgroundColor = "lightgrey"
        Thursday.style.display = "block"
        notthere.style.visibility = "hidden"
    }
    if(userchoice3 == 5){
        document.body.style.backgroundColor = "lightgrey"
        Friday.style.display = "block"
        notthere.style.visibility = "hidden"
    }
    if(userchoice3 == 6){
        document.body.style.backgroundColor = "lightgrey"
        Saturday.style.display = "block"
        notthere.style.visibility = "hidden"
    }
    if(userchoice3 == 7){
        document.body.style.backgroundColor = "lightgrey"
        Sunday.style.display = "block"
        notthere.style.visibility = "hidden"
    }
    if(userchoice3 == null){
        document.body.style.backgroundColor = "lightgrey"
        cancel.style.display = "block"
        notthere.style.visibility = "hidden"
    }
    else{
        document.body.style.backgroundColor = "lightgrey"
        notthere.style.display = "block"
    }
}

// მეოთხე დავალება
function work4(){
    var k = new Date()
    console.log("მიმდინარე წელი = "+k.getFullYear())
    console.log("მიმდინარე თვე = "+k.getMonth())
    console.log("მიმდინარე რიცხვი = "+k.getDate())
    console.log("მიმდინრე დღე = "+k.getDay())
    console.log("მიმდინარე საათი = "+k.getHours())
    console.log("მიმდინარე წუთი = "+k.getMinutes())
    console.log("მიმდინარე წამი = "+k.getSeconds())
    console.log("მიმდინარე მილიწამი = "+k.getMilliseconds())
}
work4()

// მეხუთე დავალება
function clock() {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let period = "AM";

    if (hrs == 0) hrs = 12;
    if (hrs > 12) {
        hrs = hrs - 12;
        period = "PM";
    }

    hrs = hrs < 10 ? `0${hrs}` : hrs;
    mins = mins < 10 ? `0${mins}` : mins;
    secs = secs < 10 ? `0${secs}` : secs;

    let time = `${hrs}:${mins}:${secs} ${period}`;
    setInterval(clock, 1000);
    document.getElementById("clock").innerText = time;
}

clock();

// მეექვსე დავალება

function work6(start){
    var date1 = new Date(start)
    var date2 = new Date()
    const day = 1000 * 60 * 60 * 24;
    const hour = 1000 * 60 * 60;
    const minute = 1000  * 60;
    const second = 1000;

    var time_difference = date2.getTime() - date1.getTime();

    var day_difference = time_difference / day;
    var hour_difference = time_difference / hour;
    var minute_difference = time_difference / minute;
    var second_difference = time_difference / second;
    console.log("გასული დღეების რაოდენობა= "+Math.round(day_difference))
    console.log("გასული საათების რაოდენობა= "+Math.round(hour_difference))
    console.log("გასული წუთების რაოდენობა= "+Math.round(minute_difference))
    console.log("გასული წამების რაოდენობა= "+Math.round(second_difference))
}
work6("01-01-2016")

//   მეშვიდე დავალება

const date = new Date();

const renderCalendar = () => {
    date.setDate(1);

const monthDays = document.querySelector(".days")

const lastDay = new Date(date.getFullYear(),date.getMonth()+1,0).getDate();


const prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();

const firstDayIndex = date.getDay();

const lastDayIndex = new Date(date.getFullYear(),date.getMonth() + 1,0).getDay();

const nextDays = 7 - lastDayIndex -1;
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

document.querySelector(".date .h1").innerHTML = months[date.getMonth()];
document.querySelector(".date .p").innerHTML = date.toDateString();

let days = "";

for(let x = firstDayIndex; x > 0; x-- ){
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`
}

for(let i = 1; i<=lastDay; i++){
    if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
        days += `<div class="today">${i}</div>`;
    }else {
        days += `<div>${i}</div>`;
    }
}

for(let j = 1; j <= nextDays; j++){
    days += `<div class="next-date">${j}</div>`
    monthDays.innerHTML = days;
}
}



document.querySelector(".prev").
addEventListener('click',() => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
})


document.querySelector(".next").
addEventListener('click',() => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
})

renderCalendar();

// მერვე დავალება
function work8(start,end){
    var date1 = new Date(start)
    var date2 = new Date(end)
    const oneday = 1000 * 60 * 60 * 24;
    var time_difference = date2.getTime() - date1.getTime();

    var days_difference = time_difference / oneday;

    return Math.round(days_difference - 1);
}
console.log(work8("01-01-2021","10-11-2021"))

// მეცხრე დავალება
function work9(start,end){
    var date1 = new Date(start)
    var date2 = new Date(end)
    const Week = (1000 * 60 * 60 * 24) * 7;
    var time_difference = date2.getTime() - date1.getTime();

    var Week_difference = time_difference / Week;

    return Math.round(Week_difference - 1);
}
console.log(work9("01-01-2021","10-11-2021"))