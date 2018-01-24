function Ball(position, velocity, mass, quantity) {
 this.position = position;
 this.velocity = velocity;
 this.mass = mass;
 this.quantity = quantity; // TODO: apply color to different quantity sign
 mass = Math.abs(mass);
 if (mass > 1)
  mass = Math.log(mass);
 else
  mass = 0;
 this.radius = 1 + 0.15 * mass * Math.sqrt(mass);
}

Ball.prototype = {
 moveByTime: function(timePassed) {
  this.position.addUp(this.velocity.multiply(timePassed));
 },
 accelerateByTime: function(timePassed, acceleration) {
  this.velocity.addUp(acceleration.multiply(timePassed));
 },
 accByTime: {
  'elec': function(timePassed, acc) {
   //if (this.mass == 0) {
   // console.log("Error: Ball mass cannot be zero");
   // return;
   //}
   this.accelerateByTime(this.quantity / this.mass);
  },
  'grav': function(timePassed, acc) {
   this.accelerateByTime(timePassed, acc);
  },
 }[accType],
 getAccMultiplier: {
  'elec': function() {
   return -this.quantity; // or consider 'grav' to minus better? (if so, notice to change world.js too!)
  },
  'grav': function() {
   return this.mass;
  },
 }[accType],
};
