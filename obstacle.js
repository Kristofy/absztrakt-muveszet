class Ellipse {
    constructor(pos, r){
        this.pos=pos;
        this.r=r;
        this.color=random(100);
    }

    distance = function(p){
        return dist(p.x,p.y,this.pos.x,this.pos.y)-this.r;
    }

    render = function(){
        noStroke();
        if(randomColors.checked){
            fill(this.color,sat.value,bright.value);
        }else{
            fill(0);
        }
        ellipse(this.pos.x, this.pos.y, this.r*2);
    }
}


class Rect{
    constructor(pos,w,h){
        this.pos=pos;
        this.w=w;
        this.h=h;
        this.color=random(100);
    }

    render = function(){
        noStroke();
        if(randomColors.checked){
            fill(this.color,sat.value,bright.value);
        }else{
            fill(0);
        } 
        //stroke(255);
        //strokeWeight(1);
       // noFill();
        rect(this.pos.x, this.pos.y, this.w, this.h);
    }

    distance = function(p){
       return pointRectDist(p.x,p.y,this.pos.x,this.pos.y,this.w,this.h);
    }

}

function pointRectDist (px, py, rx, ry, rwidth, rheight)
{
    var cx = Math.max(Math.min(px, rx+rwidth ), rx);
    var cy = Math.max(Math.min(py, ry+rheight), ry);
    return Math.sqrt( (px-cx)*(px-cx) + (py-cy)*(py-cy) );
}