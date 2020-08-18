const body = document.querySelector('body');

const IMG_NUMBER = 3;

function paintImage(imgNumber){
    const img = new Image();
    img.src = `img/${imgNumber}.jpg`; 
    img.classList.add("bgImage");
    body.appendChild(img);
}

function genRandom(){
    const number =Math.ceil(Math.random() *IMG_NUMBER);
    return number
}

function init (){
    const randomNumber = genRandom();
    console.log(randomNumber);
    paintImage(randomNumber);
}

init();
