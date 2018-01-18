    
    $(function() {
      $("#pushPause").button()
          .click(function() {
          paused = !paused;
      });
      
      $("#slideMass").slider({
        orientation: "horizontal",
        range: "min",
        max: 1000,
        value: slideMass,
        //slide: refreshSwatch,
        change: function() {
          slideMass = $(this).slider("value");
        },
      });
      
      $("#slideSpeed").slider({
        orientation: "horizontal",
        range: "min",
        max: 5,
        value: slideSpeed,
        //slide: refreshSwatch,
        change: function() {
          slideSpeed = $(this).slider("value");
        },
      });
      
      $("#pushSave").button()
          .click(function() {
          textWorld = saveWorld(world);
      });
      
      $("#pushLoad").button()
          .click(function() {
          world = loadWorld(textWorld);
      });
    });
