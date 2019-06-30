const HIT_DISTANCE=0.5;
const MAX_DISTANCE=1600*1600;

let someting = [];

class Ray{
    constructor(center){
        this.center = center;
        this.dir=new Vec2(0,0);
        this.end=null;
        this.color=random(100);
    }
    render(){
        if(randomColors.checked){
            stroke(this.color,sat.value,bright.value);
        }else{
            stroke(255)
        }
        if(this.end){
            strokeWeight(2);
            line(this.center.x,this.center.y,this.end.x,this.end.y);
        }else{
            strokeWeight(1);
            line(this.center.x,this.center.y,this.center.x+this.dir.x,this.center.y+this.dir.y);
        }
    }
    update(angle){
        this.dir.x=cos(angle);
        this.dir.y=sin(angle);
        let dir=Object.assign({},this.dir);    
        
        this.dir.mult(1000);
        let sum = new Vec2(0,0);
        let offset = new Vec2(0,0);
        let center = new Vec2(this.center.x,this.center.y);

        strokeWeight(0.2);
        if(randomColors.checked){
            stroke(this.color,sat.value,bright.value);
            fill(this.color,sat.value,bright.value,20);
        }else{
            stroke(255);
            fill(255,20);
        }

        for(let i=0;i<40;i++){
            let r = FindMaxToPoint(center);
            if(circles.checked){
                ellipse(center.x,center.y,r*2);
            }
            sum.add(offset);
            if(r<HIT_DISTANCE){
                someting.push({x:center.x,y:center.y});
                strokeWeight(5)
                point(center.x,center.y);
                this.end=center;
                return;
            }
            if(sum.sq()>MAX_DISTANCE){
                this.end=null;
                return;
            }
            offset=new Vec2(dir.x*r,dir.y*r);
            center.add(offset);
        }
        this.end=null;
    }
}



function FindMaxToPoint(p){
    let d = 10e10;
    for(let o of obstacles){
        let tmp = o.distance(p);
        if(d>tmp){
            d=tmp;
        }
     }
     return d;
}