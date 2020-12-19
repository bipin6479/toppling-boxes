class Ground {
    //we have to write properties in constructor
      constructor(x, y, width, height) {
        var options = {
          isStatic: true
            //restitution : 1
            //'friction':0.3,
           // 'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      //we have to function after properties
      display(){
        var pos =this.body.position;
       
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);
      
      }
    };