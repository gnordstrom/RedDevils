angular.module('RedDevils').directive('buttonColor', function() {

      // Directive needs to return an object.
    function getColor() {
      var buttonColor = ['default', 'primary', 'success', 'info', 'warning', 'danger'];
      var index = Math.floor(Math.random() * buttonColor.length);
      return buttonColor[index];
    }

  // return {
  //   restrict: 'E',
  //   scope: {
  //     title: '@',
  //     callback: '&'
  //   },
  //   link: function(scope, element, attrs) {
  //     element.on('click', function(event){
  //       scope.callback();
  //       var newButton = getColor();
  //       var targetElement = element.find('img');
  //       targetElement.css('btn-', index);
  //     });
  //   },
  //   templateUrl: './directives/buttonTemplate.html',
  //
  // };




});
