    
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
        change: function() {
          inputMass = $(this).slider("value");
          $("#inputMass").val(inputMass);
        },
      });
      
      $("#inputMass").input({
        value: inputMass,
        change: function() {
          inputMass = $(this).val();
          $("#slideMass").slider("value", inputMass);
        },
      });
      
      $("#slideSpeed").slider({
        orientation: "horizontal",
        range: "min",
        max: 5,
        value: inputSpeed,
        change: function() {
          slideSpeed = $(this).slider("value");
          $("#inputSpeed").val(inputSpeed);
        },
      });
      
      $("#inputSpeed").input({
        value: inputSpeed,
        change: function() {
          inputSpeed = $(this).val();
          $("#slideSpeed").slider("value", inputSpeed);
        },
      });
      
      $("#pushSave").button()
          .click(function() {
          $("#textWorld").val(saveWorld(world));
      });
      
      $("#pushLoad").button()
          .click(function() {
          world = loadWorld($("#textWorld").val());
      });
    });
