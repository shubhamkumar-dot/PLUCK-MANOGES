class Mango{
    constructor(x,y,width,height){
        var options = {
            isStatic: false,
            restitution:1,
            friction:1,
            density:1
        }
        this.body = Bodies.circle(x,y,width,height);
        this.width = width;
        this.height = height;
        this.image = loadImage('sprites/boy.png');
        World.add(world,this.body);
    }
    display(){
       push();
       translate(this.body.position.x,this.body.position.y);
       imageMode(CENTER);
       image(this.image,0,0,this.width,this.height);
       pop();
    }
}