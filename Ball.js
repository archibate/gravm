
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
};

Ball.prototype.accByTime = {
 'elec': function(timePassed, acc) {
  if (this.mass == 0)
   console.log("Error: Ball mass cannot be zero");
  else
   this.accelerationByTime(this.quantity / this.mass);
 },
 'grav': function(timePassed, acc) {
  this.accelerateByTime(timePassed, acc);
 },
}[accType];