
class Player{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.v=new Vec2(0,0);
        this.color=random(100);
    }
    render(){
        if(randomColors.checked){
            stroke(this.color,sat.value,bright.value);
        }else{
            stroke(255);
        }
        strokeWeight(8);
        point(this.x,this.y)
    }

    update(){
        this.x+=this.v.x;
        this.y+=this.v.y;
    }

}
