    
    $(function() {
      $("#pushPause").button()
          .click(function() {
          paused = !paused;
      });
      
      $("#slideMass").slider({
        orientation: "horizontal",
        range: "min",
        max: 1000,
        value: inputMass,
        change: function() {
          inputMass = $(this).slider("value");
          $("#inputMass").val(inputMass.toString());
          $("#inputMass").attr("value", inputMass.toString());
        },
      });
      
      $("#inputMass").val(inputMass).change(function() {
          inputMass = parseFloat($(this).val());
          $("#slideMass").slider("value", inputMass);
      });
      
      $("#slideSpeed").slider({
        orientation: "horizontal",
        range: "min",
        max: 5,
        value: inputSpeed,
        change: function() {
          inputSpeed = $(this).slider("value");
          $("#inputSpeed").val(inputSpeed.toString());
          $("#inputSpeed").attr("value", inputSpeed.toString());
        },
      });
      
      $("#inputSpeed").val(inputSpeed).change(function() {
          inputSpeed = parseFloat($(this).val());
          $("#slideSpeed").slider("value", inputSpeed);
      });
      
      /*$("#pushSave").button().click(function() {
          $("#textWorld").val(saveWorld(world));
      });
      
      $("#pushLoad").button().click(function() {
          world = loadWorld($("#textWorld").val());
      });*/
    });
