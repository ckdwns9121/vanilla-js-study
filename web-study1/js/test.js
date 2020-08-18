var test = document.querySelector('#click');
test.addEventListener("click", function () {
    alert("gd");
})

const calculator ={
    plus : function(a,b){
        return a+b
    }
}

const plus = calculator.plus(5,1);
console.log(plus);