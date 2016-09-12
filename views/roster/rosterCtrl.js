angular.module('RedDevils').controller('rosterCtrl', function($scope, mainSrv){
  mainSrv.getRoster().then(function(data) {
    $scope.players = data.players;
  });
});
