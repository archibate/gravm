function saveBall(ball) {
  return [
    ball.position.x,
    ball.position.y,
    ball.position.z,
    ball.velocity.x,
    ball.velocity.y,
    ball.velocity.z,
    ball.mass,
  ].join(" ");
}

function saveWorld(world) {
  var res = "";
  world.forEach(function(ball) {
    res += saveBall(ball) + "\n";
  });
  return res;
}

function isDefined(x) {
  return x !== undefined;
}

function isUndefined(x) {
  return x === undefined;
}

function loadBall(str) {
  var list = str.split(" ").map(parseFloat);
  if (list.findIndex(isUndefined) !== -1)
   return new Ball(new Vector(list[0], list[1], list[2]), new Vector(list[3], list[4], list[5]), list[6]);
}

function loadWorld(str) {
  var list = str.split("\n");
  return list.map(loadBall).filter(isDefined);
}
