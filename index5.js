var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");




function easeInQuad (t, b, c, d) {
    return c*(t/=d)*t + b;
}

function easeOutBack(t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
}

let x= 0
let t=0
let deltaTime = 0
let lastUpdateFrame = Date.now()

function animation(){
    deltaTime = (Date.now() - lastUpdateFrame ) / 1000
    lastUpdateFrame = Date.now()
    x = easeInQuad(t,0,100 - x,5);
    draw(x)
        
    
    
    t+=deltaTime;
    requestAnimationFrame(animation)
}

animation()

function draw(x){
    ctx.translate(x,5)
    ctx.beginPath();
    ctx.arc(0,0,20,0,100)
    ctx.stroke();
}