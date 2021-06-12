class Stone{
	constructor(x,y,width,height) {

	var options = {
			
		'restitution':0.8,
	    'friction':0.9,
		'density':12
		  
		}	
	// assign options to the rubber ball
	

		
		this.body=Bodies.rectangle(x, y, width,height, options);
		World.add(world, this.body);

	}
	display() {
			var bodypos=this.body.position;		
			push()
			translate(bodypos.x, bodypos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("green");
			//draw the ellipse here to display the rubber ball
			rect(0,0,50,50);

			pop()
	}

}