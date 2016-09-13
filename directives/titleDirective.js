angular.module('RedDevils').directive('titleColor', function() {
      // Directive needs to return an object.
  function getColor() {
    var titleColor = ['red', 'white', 'green', 'steelblue'];
    var index = Math.floor(Math.random() * titleColor.length);
    return titleColor[index];
  }

  return {
    restrict: 'E',
    scope: {
      title: '@',
      callback: '&'
    },
    link: function(scope, element, attrs) {
      element.on('click', function(event){
        scope.callback();
        var newTitle = getColor();
        var targetElement = element.find('h3');
        targetElement.css('color', newTitle);
      });
    },
    templateUrl: 'directives/titleTemplate.html',
    controller: function($scope) {
      $scope.test = 'CLICKED';
      // console.log($scope.title);
    }
  };
});
