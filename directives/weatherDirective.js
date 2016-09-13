angular.module('RedDevils').directive('showWeather', function() {
  return {
    restrict: 'E',
    controller: 'weatherCtrl'
  };
});
