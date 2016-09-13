angular.module('RedDevils').controller('resultsCtrl', function($scope, mainSrv){
  mainSrv.getResults().then(function(data) {
    // console.log(data);
    $scope.results = data;
  });
});
