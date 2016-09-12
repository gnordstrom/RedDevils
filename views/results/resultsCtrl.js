angular.module('RedDevils').controller('resultsCtrl', function($scope, mainSrv){
  mainSrv.getResults().then(function(data) {
    console.log(data);
    // moment();
    // console.log('moment: ', moment());
    // console.log(moment(data[0].date).format('MMMM Do YYYY'));
    $scope.results = data;
  });
});
