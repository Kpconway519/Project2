

//
let today = new Date();
let currentMonth = today.getMonth();
let currentYear = 2019;
let selectYear = 2019;
let selectMonth = today.getMonth();
const calendar = document.querySelector("#calendar-body");
const currentDay = document.querySelector("#currentDay");
currentDay.value = today.getDate();
const time = document.querySelector("#apptTime");


let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let monthAndYear = document.getElementById("MonthAndYear");
showCalendar(currentMonth, currentYear);


function next() {
    currentYear = 2019;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = 2019;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function jump() {
    currentYear =  2019;
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let tbl = document.getElementById("calendar-body"); 

    
    tbl.innerHTML = "";

    
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    
    let date = 1;
    for (let i = 0; i < 6; i++) {
        
        let row = document.createElement("tr");

        
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth) {
                break;
            }

            else {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-info");
                } 
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }


        }

        tbl.appendChild(row); 
    }

}

calendar.addEventListener("click", (event) => {
    //find and delete current bg-info
    let current = document.querySelector(".bg-info");
    if(current !== null) {
        current.className = "";
    }
    
    
    //assign new bg-indo
    event.target.className += "bg-info";

    //put new selected in hidden input in form
    currentDay.value = event.target.textContent;

})

///
$("#setTimeConfirm").on("click", function () {
  event.preventDefault()
  //build time object 
  let appointmentTime = new Date();
  console.log(time.value.substring(0, time.value.indexOf(":")))
  appointmentTime.setDate(currentDay.value);
  appointmentTime.setFullYear(2019);
  appointmentTime.setHours(time.value.substring(0, time.value.indexOf(":")));
  appointmentTime.setMinutes(time.value.substring(time.value.indexOf(":") + 1));
  appointmentTime.setMonth(currentMonth);


        let timeUpdate = {
        session: `${localStorage.getItem("tempSessionId")}`,
        time: appointmentTime
    };
    console.log(timeUpdate)
    //$.put("appointment/barber", barbUpdate)
    $.ajax({
        method: "PUT",
        url: "/appointment/time",
        data: timeUpdate
    }).then(function (data) {
        console.log('works')
        location.href = `/confirm`
    })


})


