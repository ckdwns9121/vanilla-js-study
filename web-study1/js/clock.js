const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const t = new Date();
    const minnutes = t.getMinutes();
    const hours = t.getHours();
    const seconds = t.getSeconds();
    clockTitle.innerText =`${hours < 10 ? "0"+hours : hours}:${minnutes<10 ? "0"+minnutes : minnutes}:${seconds<10 ? "0"+ seconds :seconds}`;
}

function init(){
    getTime();
    setInterval(getTime,1000);
}

init();