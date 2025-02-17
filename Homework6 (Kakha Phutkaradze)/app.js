// პირველი დავალება

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

let months = [
    "იანვარი",
    "თებერვალი",
    "მარტი",
    "აპრილი",
    "მაისი",
    "ივნისი",
    "ივლისი",
    "აგვისტო",
    "სექტემბერი",
    "ოქტომბერი",
    "ნოემბერი",
    "დეკემბერი"
];

function work1() {
   
    let monthAndYear = document.getElementById("monthAndYear");

    showCalendar(currentMonth, currentYear);

    function showCalendar(month, year) {
        let firstDay = new Date(year, month).getDay();
        let DaysInMonth = 32 - new Date(year, month, 32).getDate();

        let tbl = document.getElementById("calendar-body");

        tbl.innerHTML = "";

        monthAndYear.innerHTML = months[month] + " " + year;

        let date = 1;

        for (let i = 0; i < 6; i++) {
            let row = document.createElement("tr");

            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDay) {
                    let cell = document.createElement("td");
                    let cellText = document.createTextNode("");
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                }else if (date > DaysInMonth) {
                    break;
                } else {
                    let cell = document.createElement("td");
                    let cellText = document.createTextNode(date);
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                }
                date++;
            }
            tbl.appendChild(row);
        }
    }
}
work1()

