const monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
const dayNames= [ "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday" ];

setInterval(function(){
    let month = document.getElementById("month");
    let activeMonth = document.getElementById("active-month");
    let weekday = document.getElementById("weekday");
    let activeWeekday = document.getElementById("active-weekday");
    let day = document.getElementById("day");
    let activeDay = document.getElementById("active-day");

    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");

    let today = new Date();
    let getMonth = today.getMonth();
    let getDay = today.getDate();
    let getWeekday = today.getDay();

    let getHour = today.getHours();
    let getMinute = today.getMinutes();
    let getSecond = today.getSeconds();

    month.innerHTML = `<span>${monthNames[getMonth]}</span>`;
    activeMonth.innerHTML = `<span>${monthNames[getMonth]}</span>`;
    weekday.innerHTML = `<span>${dayNames[getWeekday]}</span>`;
    activeWeekday.innerHTML = `<span>${dayNames[getWeekday]}</span>`;
    day.innerHTML = `<span>${getDay}</span>`;
    activeDay.innerHTML = `<span>${getDay}</span>`;
    hours.innerHTML = `<span>${getHour}</span>`;
    minutes.innerHTML = `<span>${getMinute}</span>`;
    seconds.innerHTML = `<span>${getSecond}</span>`;
}, 1000);