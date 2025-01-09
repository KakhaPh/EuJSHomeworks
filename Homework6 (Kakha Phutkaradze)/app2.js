// მეორე დავალება

function  button() {

    box1 = document.body.children[0];
    box1.classList.add("box1")

    inBox = box1.children[2];
    inBox.classList.add("inBox")

    box2 = document.body.children[1];
    box2.classList.add("box2")

    wrapbox = box2.children[0];
    wrapbox.classList.add("wrapbox")

    document.getElementById("parentNode").addEventListener("click", function(){
        document.body.children[0].style.backgroundColor = "red"
        document.body.children[0].childNodes[1].style.backgroundColor = "white"
    });

    document.getElementById("firstChild").addEventListener("click", function(){
        document.body.children[0].childNodes[1].style.backgroundColor = "red"
    });

    document.getElementById("nextSibling").addEventListener("click", function(){
        document.body.children[0].childNodes[3].style.backgroundColor = "red"
    });

}
button()
