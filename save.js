function saveBall(ball) {
  return "new Ball(" + ball.position.toString() + ", new Vector" + ball.velocity.toString() + ", " + ball.mass.toString());
}

function saveWorld(world) {
  var res = "world = new Array();";
  for (var i in world) {
    res += "world.push(" + saveBall(world[i]) + ");";
  }
  return res;
}
