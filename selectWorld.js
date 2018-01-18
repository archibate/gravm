/**** world selectors ****/
function world1() {
world[0] = new Ball(new Vector(0, 0, 0), new Vector(0, 0, 0), 1000);
world[1] = new Ball(new Vector(10, 0, 0), new Vector(0, 9, 0), 0);
world[2] = new Ball(new Vector(0, 20, 0), new Vector(-4.5, 0, 0), 0);
}

function world2() {
world[0] = new Ball(new Vector(18, 0, 0), new Vector(0, 0, 0), 1000);
world[1] = new Ball(new Vector(-18, 0, 0), new Vector(0, 0, 0), -250);
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

world3(); /* select here */
/*************************/
