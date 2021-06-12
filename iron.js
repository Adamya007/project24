class Iron{
	constructor(x,y,width,height) {
		var options = {		
			'restitution':0.8,
			'friction':3,
			'density':30
		};			
		this.iron=Bodies.rectangle(x, y,width,height, options);
		World.add(world, this.iron);

		this.width=width;
		this.height=height;
	};

	display() {
			var ironpos=this.iron.position;
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("red");
			//draw the ellipse here to display the rubber ball
		    rect(0,0,this.width,this.height);

			pop()
	};

};