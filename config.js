var accType = 'grav';
var world = new Array(); // TODO: why here?
var paused = false; // TODO: to put iin state.js might be better
var needRenderField = false;
var dteInterval = 0.02;
var renderFieldInterval = 0.1;
var renderFieldClock = 0;
var inputMass = {'elec': 1, 'grav': 0}[accType];
var inputQuantity = 0;
var inputSpeed = 1;
