angular.module('RedDevils').controller('scheduleCtrl', function($scope, mainSrv){
  mainSrv.getSchedule().then(function(data) {
    console.log(data);
    // moment();
    // console.log('moment: ', moment());
    // console.log(moment(data[0].date).format('MMMM Do YYYY'));
    $scope.schedule = data;
  });
});
