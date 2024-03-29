var world = new Array();

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
  var distant = other.position.subtract(position);
  var accOnce = coolFunction(distant);
  accOnce.multiplyUp(other.getAccMultiplier());
  acceleration.addUp(accOnce);
 }
 return acceleration;
}
