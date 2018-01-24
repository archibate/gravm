function calcBallSize(mass) {
 if (mass > 1)
  mass = Math.log(mass);
 else
  mass = 0;
 return 1 + 0.15 * mass * Math.sqrt(mass);
}

function calcBallColor(qdm) {
 var factor = 0.5 + Math.atan(qdm) * 0.3183;
 /*var rgb = new Vector(0xFF, 0x88, 0x00).multiply(factor).add(new Vector(0x88, 0xFF, 0x00).multiply(1 - factor));
 return 'rgb' + rgb.toString();*/
 var r = 0xFF * factor + 0x88 * (1 - factor);
 var g = 0x88 * factor + 0xFF * (1 - factor);
 return 'rgb(' + r.toInteger() + ',' + g.toInteger() + ',0)';
}

function Ball(position, velocity, mass, quantity) {
 this.position = position;
 this.velocity = velocity;
 this.mass = mass;
 this.quantity = quantity;
 this.radius = calcBallSize(Math.abs(mass)); // was that abs necessary?
 this.color = calcBallColor(quantity / mass);
}

Ball.prototype = {
 moveByTime: function(timePassed) {
  this.position.addUp(this.velocity.multiply(timePassed));
 },
 accelerateByTime: function(timePassed, acceleration) {
  this.velocity.addUp(acceleration.multiply(timePassed));
 },
 accByTime: { // or consider a getForceMultiplier returns this.quantity / this.mass to be better??
  'elec': function(timePassed, acc) {
   //if (this.mass == 0) {
   // console.log("Error: Ball mass cannot be zero");
   // return;
   //}
   this.accelerateByTime(timePassed, acc.multiply(this.quantity / this.mass));
  },
  'grav': function(timePassed, acc) {
   this.accelerateByTime(timePassed, acc);
  },
 }[accType],
 getAccMultiplier: {
  'elec': function() {
   return -this.quantity; // or consider 'grav' to be minus better? (if so, don't forget to change world.js too!)
  },
  'grav': function() {
   return this.mass;
  },
 }[accType],
};
