function displaytime(){

let datetime = new Date()
let hr = datetime.getHours()
let min = datetime.getMinutes()
let sec = datetime.getSeconds()

if(hr > 12){
    hr = hr-12

   let ampm =  document.getElementById("ampm")
   ampm.innerHTML = "PM"  
}

document.getElementById("hours").innerHTML = zero(hr)
document.getElementById("mins").innerHTML = zero(min)
document.getElementById("secs").innerHTML = zero(sec)
}

function zero(num){
    return num<10?"0"+num:num
}
function datedisplay(){
    let datetime = new Date()
    let days = datetime.getDate()
    let month = datetime.getMonth()
    let year = datetime.getFullYear()
    
    document.getElementById("days").innerHTML = days
    document.getElementById("months").innerHTML = month
    document.getElementById("years").innerHTML = year
}
setInterval(displaytime,500)
setInterval(datedisplay,500)