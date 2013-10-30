var ImageSlider = function () {
  var api = {};

  api.initialize = function () {
    $('#slider').nivoSlider();
  };

  return api;
};