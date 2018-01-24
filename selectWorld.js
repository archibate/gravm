/**** world selectors ****/
function world1() {
world[0] = new Ball(new Vector(0, 0, 0), new Vector(0, 0, 0), 1000);
world[1] = new Ball(new Vector(10, 0, 0), new Vector(0, 9, 0), 0);
world[2] = new Ball(new Vector(0, 20, 0), new Vector(-4.5, 0, 0), 0);
}

function world2() {needRenderField = true;
world[0] = new Ball(new Vector(18, 0, 0), new Vector(0, 0, 0), 1000, 1000);
world[1] = new Ball(new Vector(-18, 0, 0), new Vector(0, 0, 0), 1000, -250);
}

function world3() {
world[0] = new Ball(new Vector(0, 0, 0), new Vector(2, 0, 0), 1800);
world[1] = new Ball(new Vector(0, 18, 0), new Vector(-9, 0, 0), 400);
world[2] = new Ball(new Vector(2, 18, 0), new Vector(-9, 13, 0), 0);
}

function world4() {
world[0] = new Ball(new Vector(20, 0, 0), new Vector(0, 0, 0), 800);
world[1] = new Ball(new Vector(-20, 0, 0), new Vector(0, 0, 0), -800);
}

function solarSystem() {
var PI = 3.141592653589793;
var SOLAR_MASS = 4 * PI * PI;
var DAYS_PER_YEAR = 365.24;

function newBody(x, y, z, u, v, w, m) {
  return new Ball(new Vector(x, y, z), new Vector(u, v, w), m);
}

function Jupiter(){
   return newBody(
      4.84143144246472090e+00,
      -1.16032004402742839e+00,
      -1.03622044471123109e-01,
      1.66007664274403694e-03 * DAYS_PER_YEAR,
      7.69901118419740425e-03 * DAYS_PER_YEAR,
      -6.90460016972063023e-05 * DAYS_PER_YEAR,
      9.54791938424326609e-04 * SOLAR_MASS
   );
}

function Saturn(){
   return newBody(
      8.34336671824457987e+00,
      4.12479856412430479e+00,
      -4.03523417114321381e-01,
      -2.76742510726862411e-03 * DAYS_PER_YEAR,
      4.99852801234917238e-03 * DAYS_PER_YEAR,
      2.30417297573763929e-05 * DAYS_PER_YEAR,
      2.85885980666130812e-04 * SOLAR_MASS
   );
}

function Uranus(){
   return newBody(
      1.28943695621391310e+01,
      -1.51111514016986312e+01,
      -2.23307578892655734e-01,
      2.96460137564761618e-03 * DAYS_PER_YEAR,
      2.37847173959480950e-03 * DAYS_PER_YEAR,
      -2.96589568540237556e-05 * DAYS_PER_YEAR,
      4.36624404335156298e-05 * SOLAR_MASS
   );
}

function Neptune(){
   return newBody(
      1.53796971148509165e+01,
      -2.59193146099879641e+01,
      1.79258772950371181e-01,
      2.68067772490389322e-03 * DAYS_PER_YEAR,
      1.62824170038242295e-03 * DAYS_PER_YEAR,
      -9.51592254519715870e-05 * DAYS_PER_YEAR,
      5.15138902046611451e-05 * SOLAR_MASS
   );
}

function Sun(){
   return newBody(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, SOLAR_MASS);
}

world = new Array(Sun(), Jupiter(), Saturn(), Uranus(), Neptune());
}

solarSystem(); /* select here */
/*************************/
