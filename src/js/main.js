  var svgMorpheus = new SVGMorpheus('.svg');
  var icons = ['Layer_1', 'Layer_2', 'Layer_3', 'Layer_4', 'Layer_5', 'Layer_6', 'Layer_7'];
  var current = 0;


  function changeIcon() {

    setTimeout(function() {
      svgMorpheus.to(icons[current++ % icons.length], {
        easing: 'quad-out',
        duration: 800,
      });
      changeIcon();
    }, 750);
  }

    changeIcon();
