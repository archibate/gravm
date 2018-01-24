var paused = false;
var needRenderField = false;
var dteInterval = 0.02;
var renderFieldInterval = 0.1;
var renderFieldClock = 0;

function outOfScreen(position) {
 var xy = screenOrtho(position);
 return xy.x > screenX || xy.x < 0 || xy.y < 0 || xy.y > screenY;
}

function dteMain() {
 if (paused)
  return;
 
 ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
 ctx.fillRect(0, 0, screenX, screenY);

 timePassed = dteInterval;

 for (var i in world) {
  var ball = world[i];
  ball.render(ctx);
  ball.moveByTime(timePassed);
  var acc = getFieldAt(ball.position, i);
  ball.accByTime(timePassed, acc);
  if (outOfScreen(ball.position)) {
   world.splice(i, 1);
  }
 }

 var scax = 35;
 var scay = 35;
 if (needRenderField && (renderFieldClock -= timePassed) <= 0) {
  renderField(ctx, getFieldAt, -scax, -scay, 0, scax, scay, 0, 5, 5, 100);
  renderFieldClock = renderFieldInterval;
 }
}
