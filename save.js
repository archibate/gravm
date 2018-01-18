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
  var res = "";
  for (var i in world) {
    res += saveBall(world[i]) + "\n";
  }
  return res;
}

function loadBall(str) {
  var list = str.split(",");
  return new Ball(new Vector([list[0], list[1], list[2]), new Vector([list[3], list[4], list[5]), list[6]);
}

function loadWorld(str) {
  var list = str.split("\n");
  var world = new Array(list.length);
  for (var i in list) {
    world[i] = loadBall(list[i]);
  }
  return world;
}
