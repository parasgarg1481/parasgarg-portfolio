var bubble;
var bars = [];
function setup() {
    let cnv = createCanvas(500,200);
    bars.push(new Bar());
    bubble = new Bubble();
    cnv.position((windowWidth-width)/2,(windowHeight-height)/2);
    
}

function draw(){
    background(150,200,225);
    
    if(frameCount % 125 == 0){
        bars.push(new Bar());
    }

    for( var i = bars.length - 1;i >=0;i--){
        bars[i].show();
        bars[i].move();

        if(bars[i].offscreen()){
            bars.splice(i,1);
        }

        if(bars[i].touch(bubble)){
            drawWords();
            noLoop();
        }
    }
    
    bubble.show();
    bubble.move();
    
}

function drawWords(){
    fill('red');
    textSize(50);
    textFont('bold');
    text('GAME OVER',100,100);
    fill('black');
    textSize(15);
    text('reload the page',200,120)
    textAlign(CENTER);
}

function keyPressed(){
    if(key == ' '){
        bubble.jump();
    }
}

class Bubble {
    constructor() {
        this.x = 100;
        this.y = height/2;
        this.gravity = 0.5;
        this.velocity = 0.1;
        this.show = function () {
            fill('red');
            ellipse(this.x, this.y, 20, 20);
        };
        this.move = function () {
            this.y+=this.velocity;
            this.velocity+=this.gravity;
            if(this.y > height-10){
                this.y = height-10;
                this.velocity = 0;
            }
        };
        this.jump = function(){
            this.velocity-=12;
        }
    }
}
class Bar{
    constructor() {
        this.h = random(height/3);
        this.w = 20;
        this.x = width;
        this.speed = 2;
    }
    show() {
        fill('grey');
        rect(this.x,height-this.h,this.w,this.h);
    }
    move() {
        this.x -= this.speed;
    }
    offscreen(){
        if(this.x < -this.w){
            return true;
        }
        return false;
    }
    touch(bubble) {
        if(bubble.y+10 > height-this.h && (bubble.x+10>this.x && bubble.x-10<this.x+ this.w)){
            return true;
        }
    }
}