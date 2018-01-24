function outOfScreen(position) {
 var xy = screenOrtho(position);
 return xy.x > screenX || xy.x < 0 || xy.y < 0 || xy.y > screenY;
}

var rocket = new Ball(zeroVector(), zeroVector(), 0, 0);
rocket.color = '#FFFFFF';

function dteMain() {
 if (paused)
  return;
 
 ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
 ctx.fillRect(0, 0, screenX, screenY);

 timePassed = dteInterval;
 
 rocket.render(ctx);
 var rokAcc = getFieldAt(rocket.position);
 rocket.accByTime(timePassed, rokAcc);

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
