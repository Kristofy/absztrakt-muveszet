
let vonal;

let obstacles = [];
let player;
let angle=0;
let manual=document.querySelector("#manual");
let circles=document.querySelector("#circles");
let intersectoins=document.querySelector("#intersectoins");
let randomColors=document.querySelector("#randomColors");
let sat=document.querySelector("#sat");
let bright=document.querySelector("#bright");

let colorOfPoints;

function reset(){
    obstacles=[];
    angle=0;
    someting=[];
    colorOfPoints=random(100);
    player=new Player(width/2,height/2);
    vonal = new Ray(player);
    for(let i=0;i<5;i++) {
        obstacles.push(new Ellipse(new Vec2(random(width),random(height)),random(15,60)));
    }
    for(let i=0;i<5;i++) {
        obstacles.push(new Rect(new Vec2(random(width),random(height)),random(15,60),random(15,60)));
    }
}

function setup(){
    let C = createCanvas(800,400);
    C.parent("#parent");
    player=new Player(width/2,height/2);
    vonal = new Ray(player);
    colorOfPoints=random(100);
    for(let i=0;i<5;i++) {
        obstacles.push(new Ellipse(new Vec2(random(width),random(height)),random(15,60)));
    }
    for(let i=0;i<5;i++) {
        obstacles.push(new Rect(new Vec2(random(width),random(height)),random(15,60),random(15,60)));
    }
}



function draw(){
    if(randomColors.checked){
        colorMode(HSB, 100, 100, 100, 100);
    }else{
        colorMode(RGB);
    }
    background(70);
    for(let o of obstacles){
        o.render();
    }

    vonal.render()
    player.render();;
    
    if(intersectoins.checked){
        if(randomColors.checked){
            stroke(colorOfPoints,sat.value,bright.value);
        }else{
            stroke(255);
        }
        strokeWeight(2);
        for(let p of someting){
            point(p.x,p.y);
        }
    }

    if(manual.checked){
        vonal.update(angle);
    }else{
        vonal.update();
    }
    player.update();
    angle+=0.01;
    if(angle>TWO_PI){
        angle=0;
    }
    if(someting.length>100){
        someting.splice(0,1);
    }
}



