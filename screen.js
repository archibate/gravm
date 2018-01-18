var box = document.getElementById('box');
var ctx = box.getContext('2d');

var screenX = box.width;
var screenY = box.height;

var worldMaxSize = {x: 80, y: 80};

var screenScale = {x: box.height / worldMaxSize.y, y: -box.width / worldMaxSize.x};

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
