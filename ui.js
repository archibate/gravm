
function setupInputSlide(suffix, value0, max, parser, set, convert, unconvert) {
      var input = $("#input" + suffix);
      var slide = $("#slide" + suffix);
      
      slide.slider({
        orientation: "horizontal",
        range: "min",
        max: max,
        value: value0,
        change: function() {
          var value = convert($(this).slider("value"));
          input.val(value.toString())
              .attr("value", value.toString());
          set(value);
        },
      });
      
      input.val(value0.toString())
          .attr("value", value0.toString())
          .change(function() {
          var value = parser($(this).val());
          slide.slider("value", unconvert(value));
          set(value);
      });
}

    $(function() {
      $("#pushPause").button()
          .click(function() {
          paused = !paused;
      });
      
      setupInputSlide("Mass", 0, 1000, parseFloat, function(value) {
            inputMass = value;
      }, function(val) {
            return val;
      }, function(value) {
            return value;
      });

      if (accType == 'elec')
       setupInputSlide("Quantity", 1000, 2000, parseFloat, function(value) {
             inputQuantity = value;
       }, function(val) {
             return (val - 1000) * 2;
       }, function(value) {
             return value / 2 + 1000;
       });

      setupInputSlide("Speed", 0, 1000, parseFloat, function(value) {
            inputSpeed = value;
      }, function(val) {
            return val / 250;
      }, function(value) {
            return value * 250;
      });
      
      /*$("#pushSave").button().click(function() {
          $("#textWorld").val(saveWorld(world));
      });
      
      $("#pushLoad").button().click(function() {
          world = loadWorld($("#textWorld").val());
      });*/
    });
