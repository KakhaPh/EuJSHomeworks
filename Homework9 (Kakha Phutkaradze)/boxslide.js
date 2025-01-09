function square(){
    let box = document.getElementById('box')
    let cont = document.getElementById('square')
    let colors = ['red', 'green', 'blue', 'yellow']
    let i = 0
    let timer = setInterval(() => {
        if(i == colors.length){
            i = 0
        }
        box.style.backgroundColor = colors[i]
        i++
    }
    , 1000)
   let timer1 =  setInterval(() => {
        box.style.marginLeft = box.offsetLeft + 10 + 'px'
    }
    , 100)

  let timer2 =  setInterval(() => {
        if(box.offsetLeft  >= cont.offsetWidth - box.offsetWidth){
            box.style.marginTop = box.offsetTop + 10 + 'px'
        clearInterval(timer1)
    }
    }, 100)
    
   let timer3 = setInterval(() => {
        if(box.offsetTop >= cont.offsetHeight - box.offsetHeight){
            box.style.marginLeft = box.offsetLeft - 25 + 'px'
            clearInterval(timer)
            clearInterval(timer2)
        }
    }, 100)
    let timer4 = setInterval(() => {
        if(box.offsetLeft <= 0){
            box.style.marginTop = box.offsetTop - 25 + 'px'
            clearInterval(timer3)
            if(box.offsetTop <= 0){
                clearInterval(timer4)
            }
        }
    }, 100)

}
square()
function trig(){
    setTimeout(square, 3000)
}
