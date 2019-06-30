class Ellipse {
    constructor(pos, r){
        this.pos=pos;
        this.r=r;
    }

    distance = function(p){
        return dist(p.x,p.y,this.pos.x,this.pos.y)-this.r;
    }

    render = function(){
        //rectMode(CENTER);
        stroke(0,255,0);
        noFill();
        strokeWeight(1)
        ellipse(this.pos.x, this.pos.y, this.r*2);
    }
}


class Rect{
    constructor(pos,w,h){
        this.pos=pos;
        this.w=w;
        this.h=h;
    }

    render = function(){

        stroke(255);
        strokeWeight(1);
        noFill();
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