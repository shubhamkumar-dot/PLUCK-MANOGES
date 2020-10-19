class Boy{
    constructor(){
        var options = {
            isStatic : true,
            restitution : 0,
            friction : 1,
            density : 0.1
        }
        this.body = Bodies.rectangle(150,650,200,200,options);
        this.width = 200;
        this.height = 200;
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