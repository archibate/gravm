var box = document.getElementById('box');
var ctx = box.getContext('2d');

var screenX = box.width;
var screenY = box.height;

var screenScale = {x: box.height / 80, y: -box.width / 80};

function screenOrtho(position) {
 var x = position.x * screenScale.x + screenX / 2;
 var y = position.y * screenScale.y + screenY / 2;
 return {x: x, y: y};
}

function screenUnortho(position) {
 var x = (position.x - screenX / 2) / screenScale.x;
 var y = (position.y - screenY / 2) / screenScale.y;
 return new Vector(x, y, 0);
}
