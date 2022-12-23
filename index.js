const now = moment().format("Do MMMM YYYY")
const start = moment("20221222", "YYYYMMDD") //22.12.2022
const wd = 302
const dates = document.querySelector('#dates')

///

for(let i=0; i<=365; i++){
    let x, color, day, a
    
    x = i%2
    color = (x == 1) ? "#000000" : "#BBBBBB"
    day = start.add(1,"days").format("Do MMMM YYYY").toString()
    a = (now === day) ? "<span id='now' style='color:#0571FF'>&#9733;  </span>" : ""
    
    dates.innerHTML += `<div style="color:${color}; font-weight:bold;">${a+day} <span style="font-size:10px; color:#999;">  (WD: ${wd+i+1})</span></div>`
}

/// 

document.getElementById("now").scrollIntoView({behavior: 'smooth'}, true);