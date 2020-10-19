class Tree{
    constructor(){
        var options = {
            isStatic : true,
            restitution : 0,
            friction : 1,
            density : 1.2
        }
        this.body = Bodies.rectangle(600,400,350,600,options);
        this.width = 350;
        this.height = 600;
        this.image  =loadImage('sprites/tree.png');
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