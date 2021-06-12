class Rubber{
	constructor(x,y,r) {

	var options = {
			
		'restitution':0.3,
	    'friction':5,
		'density':1
		  
		};	
	// assign options to the rubber ball
	
		this.x=x;
		this.y=y;
		this.r=r;
		this.rubber=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.rubber);

	};
	display() {
			var rubberpos=this.rubber.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			ellipseMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
			ellipse(0,0,this.r,this.r);

			pop()
	}

}