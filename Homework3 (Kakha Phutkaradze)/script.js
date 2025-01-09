// მაგალითი 1
function work1(){
    k = "Hello, Javascript is a good programming lenguage"
    document.write("1) დაწერეთ ფუნქცია, რომელიც გამოიტანს სტრიქონის სიგრძეს. "+
    "<br>"+"Hello, Javascript is a good programming lenguage = "
        +k.length+"<hr>")
}
work1()
// მაგალითი 2
function work2(){
    k = "Hello, Javascript is a good programming lenguage"
    count = k.split("a").length - 1; 
    document.write("2) დწერეთ ფუნქცია, რომელიც დაითვლის სტრიქონში სიმბოლო a-ის რაოდენობას."+"<br>")
    document.write("Hello, Javascript is a good programming lenguage = "+count +"a"+"<hr>")
}
work2()
// მაგალითი 3
function work3(){
    k = "Hello, Javascript is a good programming lenguage"
    document.write("3) დაწერეთ ფუნქცია, რომელიც სტრიქონში იპოვის ქვესტრიქონის რაოდენობას."+"<br>")
    document.write(k.indexOf("Javascript")+"<hr>")
}
work3()
// მაგალითი 4
function work4(){
    k = "Hello"
    document.write("4) დაწერეთ ფუნქცია, რომელიც გამოიტანს სტრიქონის შიდა კოდებს."+"<br>")
    document.write("H "+k.charCodeAt(0)+"<br>")
    document.write("e "+k.charCodeAt(1)+"<br>")
    document.write("l "+k.charCodeAt(2)+"<br>")
    document.write("o "+k.charCodeAt(4)+"<br>"+"<hr>")
}
work4()
// მაგალითი 5
function work5(string_length){
    var random_string = '';
    var characters = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm'
    for(var i, i = 0; i < string_length; i++){
        random_string += characters.charAt(Math.floor(Math.random()*characters.length))
    }
    document.write("5) დაწერეთ ფუნქცია, რომელიც დააგენერირებს 40 შემთხვევითი სიმბოლოსაგან  შემდგარ სიტყვას."+"<br>")
    document.write(random_string+"<hr>")
}
work5(8)
// მაგალითი 6
function work6() {
    var text = "";
    var possible = Math.random().toString(36).substr(2,5);
    
  
    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
}
document.write("6) დაწერეთ ფუნქცია, რომელიც დააგენერირებს 40 შემთხვევითი სიმბოლოსაგან  შემდგარ სიტყვას."+"<br>")

document.write(work6()+"<hr>")
// მაგალითი 7
function work7() {
    var text = "";
    var possible = Math.random().toString(36).substr(2,5);
    
  
    for (var i = -50; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text.split(" ");
}
document.write("7) დაწერეთ ფუნქცია, რომელიც დააგენერირებს n შემთხევითი სიმბოლოსგან შემ¬დგარი სიტყვებით შედგენილ 20 სიტყვიან სტრიქონს გამოტოვებებით."+"<br>")

document.write(work7()+"<hr>")

// მაგალითი 9
function work9(){
    var array = "Hello, Javascript is a great programming lenguage"
    var k =array.split(" ")
    var k1 = k.includes('programming')
    document.write("9) დაწერეთ ფუნქცია რომელიც დაადგენს სტრიქონში მოიძებნება თუ არა სტრი-ქო¬ნების მასივში ჩაწერილი სიტყვები. "+"<br>")
    document.write(k1+"<hr>")
}
work9()

// მაგალითი 10
function work10(){
    document.write("10) დაწერეთ ფუნქცია, რომელიც სტრიქონში მოძებნის სტრიქონების მასივში ჩაწერილ სიტყვებს და თუ მოიძებნა რომელიმე სიტყვა, სტრიქონში ამ სიტყვის შე¬მადგენელ სიმბოლოებს შეცვლის შესაბამისი რაოდენობის „ * “ სიმბოლოთი, ე.წ. ტექსტების ფილტრაცია, უცენზურო სიტყვების დაფარვა."+"<br>")
    let str = "Mr Blue has a blue house and a blue car";
    document.write(str.replace(/blue/gi, "****")+"<hr>")
}
work10()

// მაგალითი 11 
function work11(){
    let string = ["H%!el%$lo", "m^^%$#y", "n^$^^#ame", "i^%#s", "k$$ ak%%ha"];
    let k =  string.join(" ")
    let p = k.replace(/[a-zA-Z0-9]/g," ")
    document.write("11.	დაწერეთ ფუნქცია, რომელიც სტრიქონში დატოვებს მხოლოდ განსხვავებულ სიმ¬ბოლოებს, ხოლო დანარჩენებს წაშლის, დაადგენს თითოეული სიმბოლო რა სიხ¬შირით შეგხვდა სტრიქონში. "+"<br>")
    document.write(p)
}
work11()

