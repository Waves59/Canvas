var canvas = document.querySelector("#canvas");
ctx = canvas.getContext('2d');
canvas.width = window.innerWidth
canvas.height = window.innerHeight
mouseX = 0
mouseY = 0
active = false


document.addEventListener('mousemove', function(event){
  mouseX = event.pageX
  mouseY = event.pageY
  if(active == false){
      animate()
      active = true
  }

});


class Triangle {
    constructor(){
        this.x = Math.random() * canvas.width 
        this.y = Math.random() * canvas.height
        this.vx = Math.random() * canvas.height
        this.vy = Math.random() * canvas.height
        this.rotation = 0
        this.ease = Math.random() * 0.005
    }

    draw(){
        ctx.save();
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)
        ctx.beginPath();
        ctx.moveTo(25, 25);
        ctx.lineTo(10, 25);
        ctx.lineTo(25, 105);
        ctx.fillStyle = `rgb(128, ${255 -51 * canvas.width/this.x}, ${60 * canvas.height/this.y}`
        ctx.fill();
        ctx.closePath()
        ctx.restore()
    }

    update(){

        let angle = Math.atan2(mouseX - this.x, mouseY - this.y);
        this.rotation = -angle + Math.PI;

        this.vx = (mouseX - this.x) * this.ease
        this.vy = (mouseY - this.y) * this.ease
        
        this.x += this.vx;
        this.y += this.vy;
        
        this.draw()
    }
}

let triangle = []
let max = 10000
for(let i = 0; i < max; i++){
    triangle.push(new Triangle())
    triangle[i].draw()
}



function animate(){
    ctx.clearRect(0,0,canvas.width, canvas.height)
    triangle.forEach(element => {
        element.update()
    });
       

    requestAnimationFrame(animate)
}
