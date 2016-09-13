angular.module('RedDevils').controller('scheduleCtrl', function($scope, mainSrv){
  mainSrv.getSchedule().then(function(data) {
    // console.log(data);
    $scope.schedule = data;
  });
});
