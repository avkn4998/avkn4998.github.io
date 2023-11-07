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
    for (let i = 5; i<200; i++){
    ctx.beginPath();
    let red = random(255);
    let green = random(255);
    let blue= random(255);
    let color = "rgba("+red+","+green+","+blue+")";
    console.log(color);
    ctx.fillStyle = color
    ctx.arc(
        random(canvas.width/2),
        random(canvas.height/2),
        random(10),
        0,
        2 * Math.PI,
    )
    ctx.fill();
}
}

btn.addEventListener("click",draw);
