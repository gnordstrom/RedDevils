angular.module('RedDevils').controller('homeCtrl', function($scope, mainSrv){
  mainSrv.getWeather().then(function(data) {
    // console.log(data);
    $scope.weather = data;
  });
});
