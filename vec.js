class Vec2{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    normalize(){
        let mag= this.mag();
        this.x/=mag;
        this.y/=mag;
        return this;
    }
    add(vec){
        this.x+=vec.x;
        this.y+=vec.y;
        return this;
    }
    minus(vec){
        this.x-=vec.x;
        this.y-=vec.y;
        return this;
    }
    abs(){
        this.x=abs(this.x);
        this.y=abs(this.y);
    }
    sq(){
        return this.x*this.x+this.y*this.y;
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
    mult(num){
        this.x*=num;
        this.y*=num;
    }
}