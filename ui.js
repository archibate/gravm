
function setupInputSlide(suffix, value0, max, parser, set) {
      var input = $("#input" + suffix);
      var slide = $("#slide" + suffix);
      
      slide.slider({
        orientation: "horizontal",
        range: "min",
        max: max,
        value: value0,
        change: function() {
          var value = $(this).slider("value");
          input.val(value.toString())
              .attr("value", value.toString());
          set(value);
        },
      });
      
      input.val(value0.toString())
          .attr("value", value0.toString())
          .change(function() {
          var value = parser($(this).val());
          slide.slider("value", value);
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
      });
      setupInputSlide("Quantity", 0, 1000, parseFloat, function(value) {
          inputQuantity = value;
      });
      setupInputSlide("Speed", 0, 5, parseFloat, function(value) {
          inputSpeed = value;
      });
      
      /*$("#pushSave").button().click(function() {
          $("#textWorld").val(saveWorld(world));
      });
      
      $("#pushLoad").button().click(function() {
          world = loadWorld($("#textWorld").val());
      });*/
    });
