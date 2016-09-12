angular.module('RedDevils').directive('showTime', function() {
  return {
    restrict: 'E',
    templateUrl: './directives/clockTemplate.html',
    link: function(scope, element, attrs) {
      var currentTime = new Date();
      scope.time = currentTime;
    }
  };
});
