function keyCode(event) {
    var box = document.getElementById('movingbox');
    var cont = document.getElementById('cont');
    var x = event.keyCode;
    if (x == 39) {
        box.style.width = box.offsetWidth + 5 + '%';
        box.style.backgroundColor = 'green';
        cont.style.overflow = 'hidden';
    }
    if (x == 37) {
        box.style.width = box.offsetWidth - 100 + 'px';
        box.style.backgroundColor = 'red';
        cont.style.overflow = 'hidden';
    }
    if (x == 38) {
        box.style.height = box.offsetHeight - 100 + 'px';
        box.style.backgroundColor = 'orange';
        cont.style.overflow = 'hidden';

    }
    if (x == 40) {
        box.style.height = box.offsetHeight + 5 + '%';
        box.style.backgroundColor = 'yellow';
        cont.style.overflow = 'hidden';
    }
}

function keyCode2(event) {
    var box = document.getElementById('movingbox2');
    var cont = document.getElementById('cont2');
    var x = event.keyCode;
    if (x == 37) {
        box.style.position = 'absolute'
        box.style.left = '80px'
        box.style.backgroundColor = 'purple';
        cont.style.overflow = 'hidden';
    }
    if (x == 38) {
        box.style.position = 'absolute';
        box.style.top = '300px'
        box.style.backgroundColor = 'lightgreen';
        cont.style.overflow = 'hidden';
    }
    if (x == 39) {
        box.style.position = 'absolute';
        box.style.right = '210px'
        box.style.backgroundColor = 'lightblue';
        cont.style.overflow = 'hidden';
    }
    if (x == 40) {
        box.style.position = 'absolute';
        box.style.top = '420px'
        box.style.backgroundColor = 'darkred';
        cont.style.overflow = 'hidden';
    }
    
}