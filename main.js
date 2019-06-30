
let vonal;

let obstacles = [];
let player;
let playerV;
let d=0;

function setup(){
    let C = createCanvas(800,400);
    C.parent("#parent");
    vonal = new Ray(new Vec2(width/2,height/2),new Vec2(width,height/2));
    player=new Vec2(width/2,height/2);
    playerV=new Vec2(0,0);
    for(let i=0;i<5;i++) {
        obstacles.push(new Ellipse(new Vec2(random(width),random(height)),random(15,60)));
    }
    for(let i=0;i<5;i++) {
        obstacles.push(new Rect(new Vec2(random(width),random(height)),random(15,60),random(15,60)));
    }
}

function keyPressed(){
    switch(key){
        case 'w': playerV.y-=5; break;
        case 'a': playerV.x-=5; break;
        case 's': playerV.y+=5; break;
        case 'd': playerV.x+=5; break;
    }
}

function keyReleased(){
    switch(key){
        case 'w': playerV.y+=5; break;
        case 'a': playerV.x+=5; break;
        case 's': playerV.y-=5; break;
        case 'd': playerV.x-=5; break;
    }
}

function draw(){
    d=1e10;
    background(51);

    //vonal.render();
    stroke(255);
    strokeWeight(8)
    point(player.x, player.y);
    
    for(let o of obstacles){
       o.render();
       let tmp= o.distance(player);
       if(d>tmp){
           d=tmp;
       }
    }

    stroke(255);
    fill(255,40);
    ellipse(player.x,player.y,d*2);

    player.add(playerV);
}

class Vec2{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    add(vec){
        this.x+=vec.x;
        this.y+=vec.y;
    }
    minus(vec){
        this.x-=vec.x;
        this.y-=vec.y;
    }
    abs(){
        this.x=abs(this.x);
        this.y=abs(this.y);
    }
    negative(){
        if(this.x<0||this.y<0){
            return true;
        }else{
            return false;
        }
    }
    mag(){
        return sqrt(this.x*this.x+this.y*this.y);
    }
}

class Ray{
    constructor(a, b){
        this.a = a;
        this.b = b;
    }
    render(){
        stroke(255)
        line(this.a.x,this.a.y,this.b.x,this.b.y);
    }
}

