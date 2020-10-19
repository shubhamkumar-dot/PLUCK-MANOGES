class Stone{
    constructor(x,y,r){
        var options = {
            isStaic: false,
            restitution:0.1,
            friction:1,
            density:1
        }
     
         this.x = x;
         this.y = y;
         this.r = r;
        this.image = loadImage('sprites/stone.png');
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);
    }
    display(){
        // this.body.position.x = mouseX;
         push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        ellipseMode(RADIUS);
        image(this.image,0,0,this.r*2,this.r*2);
        pop();
    }
    
}