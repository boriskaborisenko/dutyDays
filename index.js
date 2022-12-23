const now = moment().format("Do MMMM YYYY")
const start = moment("20221222", "YYYYMMDD") //22.12.2022
const dates = document.querySelector('#dates')
dates.innerHTML = `<div style="color:#000000; font-weight:bold;">${start.format("Do MMMM YYYY")}</div>`

for(let i=0; i<=365; i++){
    let x = i%2
    let color = (x == 1) ? "#000000" : "#BBBBBB"
    let day = start.add(1,"days").format("Do MMMM YYYY").toString()
    let a = (now === day) ? "<span id='now' style='color:red'>&#9829;  </span>" : ""
    dates.innerHTML += `<div style="color:${color}; font-weight:bold;">${a+day}</div>`
}

document.getElementById("now").scrollIntoView({behavior: 'smooth'}, true);