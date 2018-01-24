var world = new Array();

function getForceScalerElec() {
 return this.mass / this.quantity;
}

function getForceScalerGrav() {
 return -this.mass;
}

Ball.prototype.getForceScaler = getForceScalerGrav; // changes here

function coolFunction(distant) {
 var distanceSquared = distant.dotProduct(distant);
 if (distanceSquared <= 0.00001)
  return zeroVector();
 var distanceCubed = distanceSquared * Math.sqrt(distanceSquared);
 return distant.divide(distanceCubed);
}

function getFieldAt(position, excluded) {
 var acceleration = zeroVector();
 for (var i in world) {
  if (i === excluded)
   continue;
  var other = world[i];
  if (other.mass === 0)
   continue;
  var distant = position.subtract(other.position);
  var accOnce = coolFunction(distant);
  accOnce.multiplyUp(other.getForceScaler());
  acceleration.addUp(accOnce);
 }
 return acceleration;
}
