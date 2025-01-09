// 1,2,3,4 მაგალითი
function work1(x,x1,x2){
    document.write("1) 23.6 დამრგვალება მეტობით = "+Math.ceil(x)+"<hr>")
    document.write("2) 24.8 დამრგვალება ნაკლებობით = "+Math.floor(x1)+"<hr>")
    document.write("3) 23.5 დამრგვალება  = "+Math.round(x2)+"<hr>")
}
work1(x=23.6,x1=24.8,x2=23.5)
// მეხუთე მაგალითი
function work5(){
    document.write("5) [0,1) შუალედში რანდომ რიცხვი = " + Math.random()+"<hr>")
}
work5()
// მეექვსე მაგალითი
function work6(){
    document.write("6) [5,50) შუალედში რანდომ რიცხვი = " +Math.floor(Math.random()*(50-5)+5)+"<hr>") 
}
work6()
// მეშვიდე მაგალითი
function work7(a, b){
    document.write("7) [a,b) შუალედში რანდომ რიცხვი = "+(Math.random()*(b - a + 1) + a)+"<hr>")
}
const rndInt = work7(20, 24)

// მერვე მაგალითი
function work8(a, b){
    document.write("8) [a,b) შუალედში რანდომ რიცხვი = "+Math.floor(Math.random() * (b - a + 1) + a)+"<hr>")
}
const random = work8(20, 24)

// მეცხრე მაგალითი
function work9(a, b){
    document.write("9) [a,b) შუალედში რანდომ 10 რიცხვი = "+Math.floor(Math.random() * (b - a + 1) + a)
    +"; "+Math.floor(Math.random() * (b - a + 1) + a)+"; "+Math.floor(Math.random() * (b - a + 1) + a)+"; "+
    Math.floor(Math.random() * (b - a + 1) + a)+"; "+Math.floor(Math.random() * (b - a + 1) + a)+"; "+
    Math.floor(Math.random() * (b - a + 1) + a)+"; "+Math.floor(Math.random() * (b - a + 1) + a)+"; "+
    Math.floor(Math.random() * (b - a + 1) + a)+"; "+Math.floor(Math.random() * (b - a + 1) + a)+"; "+
    Math.floor(Math.random() * (b - a + 1) + a)+"; "+Math.floor(Math.random() * (b - a + 1) + a)+"; "+
    "<hr>")
}
const nxt = work9(1, 24)
// მეათე მაგალითი
function work10(x,y,n){
    document.write("10) [a;b) შუალედში რანდომ n რიცხვი = ")
    for(let i =0; i<n;i++){
    x = Math.ceil(x);
    y = Math.floor(y);
    document.write(Math.floor(Math.random() * (y - x))+x+"; ")
    document.write(Math.floor(Math.random()*n))
    }
    document.write("<hr>")
}
work10(1,20,20)
// მეთერთმეტე მაგალითი
function work11(){
    let day = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]  
    const random = Math.floor(Math.random() * day.length);
    document.write("11) კვირის დღეებიდან შემთხვევითობით ერთის არჩევა = "+day[random]+"<hr>")
}
work11()

// მეთორმეტე მაგალითი
function task12(){
    document.write("12) 10 სურათიდან შემთხვევითობით არჩეული 1 = "+"<br>")
    let picts = ["/Pictures/1.png","/Pictures/2.png","/Pictures/3.png","/Pictures/4.png","/Pictures/5.png","/Pictures/6.png","/Pictures/7.png","/Pictures/8.png","/Pictures/9.png","/Pictures/10.png"]
    var ranpic = Math.floor(Math.random() * picts.length);
    document.write(`<img width="150px" height="150px" src=${picts[ranpic]}>`+"<hr>") 
}
task12()
// მეცამეტე მაგალითი
function work13(){
    document.write("13) 20 სურათიდან შემთხვევით არჩეული 4  = "+"<br>")
    let picts = ["/Pictures/1.png","/Pictures/2.png","/Pictures/3.png","/Pictures/4.png","/Pictures/5.png","/Pictures/6.png","/Pictures/7.png","/Pictures/8.png","/Pictures/9.png","/Pictures/10.png"]
    var ranpic = Math.floor(Math.random() * 4);var k =0; while(k<4){k++;
    document.write(`<img width="150px" height="150px" src=${picts[ranpic+k]}>`) 
    }   
    document.write("<hr>")
}
work13()
// მეთოთხმეტე მაგალითი
function work14(){
    document.write("14) კვირის რომელიმე დღე, რომელიმე სურათთან ერთად")
    let day = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    let picts = ["/Pictures/1.png","/Pictures/2.png","/Pictures/3.png","/Pictures/4.png","/Pictures/5.png","/Pictures/6.png","/Pictures/7.png","/Pictures/8.png","/Pictures/9.png","/Pictures/10.png"]
    
    var randay = Math.floor(Math.random() * day.length);
    var ranpic = Math.floor(Math.random() * picts.length);
    
    document.write(`<p>${day[randay]}<p>`)
    document.write(`<img width="150px" height="150px" src=${picts[ranpic]}>`+"<hr>") 
}
work14()
// მეთხუთმეტე მაგალითი
function work15(){
    document.write("15) კვირის რომელიმე დღე, რომელიმე 5 სურათიდან ერთ-ერთთან ერთად")
    let day = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    let picts = ["/Pictures/1.png","/Pictures/2.png","/Pictures/3.png","/Pictures/4.png","/Pictures/5.png"]
    
    var randay = Math.floor(Math.random() * day.length);
    var ranpic = Math.floor(Math.random() * picts.length);
    
    document.write(`<p>${day[randay]}<p>`)
    document.write(`<img width="150px" height="150px" src=${picts[ranpic]}>`+"<hr>") 
}
work15()
// მეთექვსმეტე მაგალითი
function work16(){

    document.write("16) თვის რომელიმე შემთხვევითი რიცხვი = ")
        
        let date = Math.floor(Math.random() * 31);
                
                document.write(date+"<hr>")
    
    }
work16()
//  მეჩვიდმეტე მაგალითი
function work17(){
    document.write("17) თვის რომელიმე დღე, რომელიმე სურათთან ერთად = "+"<br>")
    
    let picts = ["/Pictures/1.png","/Pictures/2.png","/Pictures/3.png","/Pictures/4.png","/Pictures/5.png","/Pictures/6.png","/Pictures/7.png","/Pictures/8.png","/Pictures/9.png","/Pictures/10.png","/Pictures/11.png"]
    
    let date = Math.floor(Math.random() * 31);
    var ranpic = Math.floor(Math.random() * picts.length);
    
    document.write(date)
    document.write(`<img width="150px" height="150px" src=${picts[ranpic]}>`+"<hr>") 
}
work17()
// მეთვრამეტე მაგალითი
function tableCreate1(){
    document.write("<h5>18) დავალება</h5>")
    var body = document.body,
        tbl1  = document.createElement('table');
        let picts = ["/Pictures/1.png","/Pictures/2.png","/Pictures/3.png","/Pictures/4.png","/Pictures/5.png","/Pictures/6.png","/Pictures/7.png","/Pictures/8.png","/Pictures/9.png","/Pictures/10.png"]


    for(var i = 0; i < 4; i++){
        var tr = tbl1.insertRow();
        for(var j = 0; j < 3; j++){
            if(i == 1 && j == 4){
                break;
            } else {
                var td = tr.insertCell();
                let Imgs = document.createElement("img")
                td.appendChild(Imgs);
                Imgs.src= picts[Math.floor(Math.random() * picts.length)]
                Imgs.style.width='100px'
                Imgs.style.height='100px'
                Imgs.style.border = '1px solid black';
                if(i == 1 && j == 4){
                    td.setAttribute('rowSpan', '2');
                }
            }
        }
    }
    body.appendChild(tbl1);
}
tableCreate1();
document.write("<hr>")