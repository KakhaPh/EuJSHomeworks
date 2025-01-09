// პირველი დავალება
function k1(text){
    document.write("<h5>1. დავალება</h5>")
    document.write("<p class='k1'>"+ text + "</p>" + "<hr>")
}
k1("Hello Javascript");
// მეორე დავალება
function k2(k,p){
    document.write("<h5>2. დავალება</h5>")
    return k+p;
}
    document.write("<p> 16+8 = "+ k2(16,8)+"<hr>");
// მესამე დავალება
function k3(text,size){
    document.write("<h5>3. დავალება</h5>")
    return size + text + size;
}   
    document.write(k3("<h2>","JS","</h2>")+"<hr>");

// მეოთხე დავალება
function tableCreate1(width){
    document.write("<h5>4. დავალება</h5>")
    var body = document.body,
        tbl1  = document.createElement('table');
    tbl1.style.width  = width
    for(var i = 0; i < 2; i++){
        var tr = tbl1.insertRow();
        for(var j = 0; j < 2; j++){
            if(i == 2 && j == 1){
                break;
            } else {
                var td = tr.insertCell();
                td.appendChild(document.createTextNode('Table 1'));
                td.style.border = '1px solid black';
                if(i == 1 && j == 1){
                    td.setAttribute('rowSpan', '2');
                }
            }
        }
    }
    body.appendChild(tbl1);
}
tableCreate1("300px");
document.write("<hr>")
// მეხუთე დავალება
function tableCreate2(height){
    document.write("<h5>5. დავალება</h5>")
    var body = document.body,
        tbl2  = document.createElement('table');
    tbl2.style.height  = height
    for(var i = 0; i < 2; i++){
        var tr = tbl2.insertRow();
        for(var j = 0; j < 2; j++){
            if(i == 2 && j == 1){
                break;
            } else {
                var td = tr.insertCell();
                td.appendChild(document.createTextNode('Table 2'));
                td.style.border = '1px solid black';
                if(i == 1 && j == 1){
                    td.setAttribute('rowSpan', '2');
                }
            }
        }
    }
    body.appendChild(tbl2);
}
tableCreate2("150px");
document.write("<hr>")
// მეექვსე დავალება
function tableCreate3(width , height){
    document.write("<h5>6. დავალება</h5>")
    var body = document.body,
        tbl3  = document.createElement('table');
    tbl3.style.width   = width
    tbl3.style.height  = height
    for(var i = 0; i < 2; i++){
        var tr = tbl3.insertRow();
        for(var j = 0; j < 2; j++){
            if(i == 2 && j == 1){
                break;
            } else {
                var td = tr.insertCell();
                td.appendChild(document.createTextNode('Table 2'));
                td.style.border = '1px solid black';
                if(i == 1 && j == 1){
                    td.setAttribute('rowSpan', '2');
                }
            }
        }
    }
    body.appendChild(tbl3);
}
tableCreate3("300px" , '100px');
document.write("<hr>")
// მეშვიდე დავალება
function tableCreate4(backgroundColor){
    document.write("<h5>7. დავალება</h5>")
    var body = document.body,
        tbl4  = document.createElement('table');
    tbl4.style.backgroundColor   = backgroundColor
    for(var i = 0; i < 2; i++){
        var tr = tbl4.insertRow();
        for(var j = 0; j < 2; j++){
            if(i == 2 && j == 1){
                break;
            } else {
                var td = tr.insertCell();
                td.appendChild(document.createTextNode('Table 2'));
                td.style.border = '1px solid black';
                if(i == 1 && j == 1){
                    td.setAttribute('rowSpan', '2');
                }
            }
        }
    }
    body.appendChild(tbl4);
}
tableCreate4("blue");
document.write("<hr>")
// მერვე დავალება
function tableCreate5(borderSize){
    document.write("<h5>8. დავალება</h5>")
    var body = document.body,
        tbl4  = document.createElement('table');
    tbl4.style.border   = borderSize
    for(var i = 0; i < 2; i++){
        var tr = tbl4.insertRow();
        for(var j = 0; j < 2; j++){
            if(i == 2 && j == 1){
                break;
            } else {
                var td = tr.insertCell();
                td.appendChild(document.createTextNode('Table 2'));
                td.style.border = '1px solid black';
                if(i == 1 && j == 1){
                    td.setAttribute('rowSpan', '2');
                }
            }
        }
    }
    body.appendChild(tbl4);
}
tableCreate5("15px solid black");
document.write("<hr>")
// მეცხრე დავალება
function tableCreate6(width,height,backgroundColor,borderSize){
    document.write("<h5>9. დავალება</h5>")
    var body = document.body,
        tbl4  = document.createElement('table');
    tbl4.style.width    = width
    tbl4.style.height   = height
    tbl4.style.backgroundColor = backgroundColor
    tbl4.style.border   = borderSize
    for(var i = 0; i < 2; i++){
        var tr = tbl4.insertRow();
        for(var j = 0; j < 2; j++){
            if(i == 2 && j == 1){
                break;
            } else {
                var td = tr.insertCell();
                td.appendChild(document.createTextNode('Table 2'));
                td.style.border = '1px solid black';
                if(i == 1 && j == 1){
                    td.setAttribute('rowSpan', '2');
                }
            }
        }
    }
    body.appendChild(tbl4);
}
tableCreate6("200px","150px","green","10px solid black");
document.write("<hr>")
// მეათე დავალება
function tableCreate7(width,height,backgroundColor,borderSize,fontsize,color,font,boldness){
    document.write("<h5>10. დავალება</h5>")
    var body = document.body,
        tbl4  = document.createElement('table');
    tbl4.style.width    = width
    tbl4.style.height   = height
    tbl4.style.backgroundColor = backgroundColor
    tbl4.style.border   = borderSize
    tbl4.style.fontsize = fontsize
    tbl4.style.color = color
    tbl4.style.font = font
    tbl4.style.boldness = boldness
    for(var i = 0; i < 2; i++){
        var tr = tbl4.insertRow();
        for(var j = 0; j < 2; j++){
            if(i == 2 && j == 1){
                break;
            } else {
                var td = tr.insertCell();
                td.appendChild(document.createTextNode('Table 2'));
                td.style.border = '1px solid black';
                if(i == 1 && j == 1){
                    td.setAttribute('rowSpan', '2');
                }
            }
        }
    }
    body.appendChild(tbl4);
}
tableCreate7("400px","200px","lightblue","20px solid yellow","25px","yellow","italic","700");
document.write("<hr>")
// მეთერთმეტე დავალება
function First10(){
    document.write("<h5>11. დავალება</h5>")
    for(let i = 0; i < 10; i++){
    document.write("<h4>" + i + "</h4>")
    }
}
First10()
document.write("<hr>")
// მეთორმეტე დავალება
function numbers(k){
    document.write("<h5>12. დავალება</h5>")
    for(let i = 1; i < k; i++){
        document.write("<h4>" + i + "</h4>")
        
    }
}
numbers(7)
document.write("<hr>")
// მეცამეტე დავალება
function numbersfrom(k,p){
    document.write("<h5>13. დავალება</h5>")
    for(let i = k; k < p; i++){
        document.write("<h4>" + k + p + "</h4>")
    }
}
numbersfrom(-1,5);
document.write("<hr>");
// მეთოთხმეტე დავალება
function numbersfrom(k,p){
    document.write("<h5>14. დავალება</h5>")
    for(let i = 0; i < p; i++){
        document.write("<h4>" + i + "</h4>")
    }
}
numbersfrom(12,5)
document.write("<hr>")
// მეთხუთმეტე დავალება
function k15(){
    document.write("<h5>15. დავალება</h5>")
}
k15()
