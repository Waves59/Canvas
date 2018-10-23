var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");

class Easing {
    constructor(){

    }


    easeInQuad (x, t, b, c, d) {
        return c*(t/=d)*t + b;
    }

    draw(){
        ctx.beginPath();
        ctx.moveTo(20,20);
        ctx.bezierCurveTo(20,100,200,100,200,20);
        ctx.stroke();
    }

}


function easeInQuad (x, t, b, c, d) {
    return c*(t/=d)*t + b;
}


ctx.beginPath();
ctx.moveTo(20,20);
ctx.bezierCurveTo(20,100,200,100,200,20);
ctx.stroke();

console.log(easeInQuad(20,60,10,5,10))