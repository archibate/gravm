
    var inputMass = 0;
    var inputSpeed = 1;
    var lastMouse;
    
    function getMouse(e) {
      if (e.layerX || e.layerX == 0) { // Firefox 
        e.target.style.position = 'relative';
        return {x: e.layerX, y: e.layerY};
      } else {
        return {x: e.offsetX, y: e.offsetY};
      }
    }
    
    box.onmousedown = function(e) {
      lastMouse = getMouse(e);
    };
    
    box.onmouseup = function(e) {
      var mouse = getMouse(e);
      
      var position = screenUnortho(mouse);
      var velocity = zeroVector();
      
      if (lastMouse !== undefined) {
        var lastPosition = screenUnortho(lastMouse);
        var speed = inputSpeed;
        velocity = position.subtract(lastPosition).multiply(speed);
      }
      
      var mass = inputMass;
      var quantity = inputQuantity;
      
      var ball = new Ball(position, velocity, mass, quantity);
      world.push(ball);
      
      lastMouse = undefined;
    };
    
    setInterval(dteMain, dteInterval);
