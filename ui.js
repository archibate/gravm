    
    $(function() {
      $("#slideMass").slider({
        orientation: "horizontal",
        range: "min",
        max: 1000 + 0.0,
        value: slideMass + 0.0,
        //slide: refreshSwatch,
        change: function() {
          slideMass = $(this).slider("value");
        },
      });
      $("#slideSpeed").slider({
        orientation: "horizontal",
        range: "min",
        max: 5 + 0.0,
        value: slideSpeed + 0.0,
        //slide: refreshSwatch,
        change: function() {
          slideSpeed = $(this).slider("value");
        },
      });
    });
