
Ball.prototype.render = function(ctx) {
 var xy = screenOrtho(this.position);
 ctx.fillStyle = '#FF8800';
 ctx.strokeStyle = '#AA5500';
 var radius = this.radius;
 fillCircle(ctx, xy.x, xy.y, radius);
}

function renderField(ctx, field, x0, y0, z0, x1, y1, z1, dx, dy, dz) {
 ctx.strokeStyle = '#558888';
 var scale = 0.3;
 for (var y = y0; y <= y1; y += dy) {
  for (var x = x0; x <= x1; x += dx) {
   //for (var z = z0; z <= z1; z += dz) {
    var z = 0;
    var position = new Vector(x, y, z);
    var v = field(position);
    var xy = screenOrtho(position);
    var ovx = v.x * screenScale.x * scale;
    var ovy = v.y * screenScale.y * scale;
    if (ovx * ovx + ovy * ovy > 1500)
     continue;
    drawArrow(ctx, xy.x, xy.y, ovx, ovy);
   //}
  }
 }
}
