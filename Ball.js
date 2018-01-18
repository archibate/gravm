
function Ball(position, velocity, mass) {
 this.position = position;
 this.velocity = velocity;
 this.mass = mass;
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

    </script><script>

function fillCircle(ctx, x, y, r) {
 ctx.beginPath();
 ctx.arc(x, y, r, 0, 2 * Math.PI);
 ctx.fill();
}

function drawArrow(ctx, x0, y0, dx, dy) {
 ctx.moveTo(x0, y0);
 ctx.lineTo(x0 + dx, y0 + dy);
 ctx.lineTo(x0 + 0.8 * dx - 0.2 * dy, y0 + 0.8 * dy + 0.2 * dx);
 ctx.moveTo(x0 + dx, y0 + dy);
 ctx.lineTo(x0 + 0.8 * dx + 0.2 * dy, y0 + 0.8 * dy - 0.2 * dx);
 ctx.stroke();
}
