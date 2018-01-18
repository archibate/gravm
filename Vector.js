function Vector(x, y, z) {
 this.x = x;
 this.y = y;
 this.z = z;
}

Vector.prototype = {
 copy: function() {
  return new Vector(this.x, this.y, this.z);
 },
 negate: function() {
  return new Vector(-this.x, -this.y, -this.z);
 },
 add: function(other) {
  return new Vector(this.x + other.x, this.y + other.y, this.z + other.z);
 },
 subtract: function(other) {
  return new Vector(this.x - other.x, this.y - other.y, this.z - other.z);
 },
 multiply: function(other) {
  return new Vector(this.x * other, this.y * other, this.z * other);
 },
 divide: function(other) {
  return new Vector(this.x / other, this.y / other, this.z / other);
 },
 negateUp: function(other) {
  this.x = -this.x;
  this.y = -this.y;
  this.z = -this.z;
  return this;
 },
 addUp: function(other) {
  this.x += other.x;
  this.y += other.y;
  this.z += other.z;
  return this;
 },
 subtractUp: function(other) {
  this.x -= other.x;
  this.y -= other.y;
  this.z -= other.z;
  return this;
 },
 multiplyUp: function(other) {
  this.x *= other;
  this.y *= other;
  this.z *= other;
  return this;
 },
 divideUp: function(other) {
  this.x /= other;
  this.y /= other;
  this.z /= other;
  return this;
 },
 dotProduct: function(other) {
  return this.x * other.x + this.y * other.y + this.z * other.z;
 },
 crossProduct: function(other) {
  return new Vector(this.y * other.z - this.z * other.y, this.z * other.x - this.x * other.z, this.x * other.y - this.y * other.x);
 },
 length: function() {
  return Math.sqrt(dotProduct(this));
 },
 normalize: function() {
  return divide(length());
 },
 normalizeUp: function() {
  return divideUp(length());
 },
 toString: function() {
  return '(' + this.x + ',' + this.y + ',' + this.z + ')';
 },
};

function zeroVector() {
 return new Vector(0, 0, 0);
}
