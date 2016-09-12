angular.module('RedDevils').controller('tableCtrl', function($scope, mainSrv){
  mainSrv.getTable().then(function(data) {
    console.log(data);
    $scope.table = data;
  });
});
