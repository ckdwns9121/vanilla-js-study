const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting  = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING = "showing";

function paintGreeting(text){
    form.classList.remove(SHOWING);
    greeting.classList.add(SHOWING);
    greeting.innerText =`HELLO ${text}`
}

function handleSubmit (e) {
    e.preventDefault();
    const userName = input.value;
    localStorage.setItem(USER_LS,userName);
    paintGreeting(userName);
}

function askForName(){
    form.classList.add(SHOWING);
    form.addEventListener("submit",handleSubmit)
}

function loadName (){
    const currnetUser = localStorage.getItem(USER_LS);
    
    if(currnetUser ===null){
        askForName();
    }
    else{
        paintGreeting(currnetUser);
    }
}

function init(){
    loadName();
}

init();