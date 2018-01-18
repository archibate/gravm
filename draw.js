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
