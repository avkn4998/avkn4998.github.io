console.log 

const x = 2;
const y = 2;

if (x===y) {
    console.log("SUCCESS");
}
else{
    console.log("FAIL");
}

const btn = document.querySelector
("button");
const canvas = document. 
querySelector("canvas");
const ctx = canvas.getContext("2d");

document.addEventListener("DOMContentLoaded",()=>{
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
});

function random(number) {
    return Math.floor(Math.random() * number);
}



function draw (){
    ctx.clearRect(0,0, canvas.width, canvas.height);
}

btn.addEventListener("click",draw);