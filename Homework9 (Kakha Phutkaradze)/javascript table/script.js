function createtable() {
    let table = document.getElementById('table')
    let column = document.getElementById('column').value
    let row = document.getElementById('row').value
    let color = document.getElementById('color').value
    let clr = ["red", "white", "orange", "blue", "yellow", "green"]

    for(let j = 0; j < row; j++) {
        let addrows = document.createElement('tr')

        for(let i = 0; i < column; i++) {
            let addcolumn = document.createElement('td')
            addcolumn.style.border = 'solid 1px blue'
            addcolumn.style.height = '75px'
            addcolumn.style.width = '75px'
            addcolumn.style.backgroundColor = clr[Math.floor(Math.random() * color)]

            addrows.appendChild(addcolumn)
        }
        table.appendChild(addrows)
    }
}