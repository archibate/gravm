
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
 accByTime: function(timePassed, acc) {
  this.accelerateByTime(timePassed, acc);
 },
};
