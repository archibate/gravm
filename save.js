function saveBall(ball) {
  return [
    ball.position.x,
    ball.position.y,
    ball.position.z,
    ball.velocity.x,
    ball.velocity.y,
    ball.velocity.z,
    ball.mass,
  ].toString();
}

function saveWorld(world) {
  for (var i in world) {
    res += saveBall(world[i]) + "\n";
  }
  return res;
}
