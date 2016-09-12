angular.module('RedDevils').service('mainSrv', function($http){


// results
this.getResults = function() {
  return $http ({
    method: 'GET',
    url: 'http://api.football-data.org/v1/teams/66/fixtures?season=2016&timeFrame=p100',
    headers: {'X-Auth-Token': 'e96b093863bd40a6b71baa34f628e13b'}
  }).then(function(response){
    console.log(response);
    return response.data.fixtures;
  });
};

// Roster
  this.getRoster = function() {
    return $http ({
      method: 'GET',
      url: 'http://api.football-data.org/v1/teams/66/players',
      headers: {'X-Auth-Token': 'e96b093863bd40a6b71baa34f628e13b'}
    }).then(function(response){
      var sortedRoster = response.data.players.sort(function(a, b){return a.jerseyNumber-b.jerseyNumber});
      return response.data;
    });
  };

// Table
this.getTable = function() {
  return $http ({
    method: 'GET',
    url: 'http://api.football-data.org/v1/competitions/426/leagueTable',
    headers: {'X-Auth-Token': 'e96b093863bd40a6b71baa34f628e13b'}
  }).then(function(response){
    console.log(response);
    return response.data.standing;
  });
};

// Schedule
this.getSchedule = function() {
  return $http ({
    method: 'GET',
    url: 'http://api.football-data.org/v1/teams/66/fixtures?timeFrame=n260',
    headers: {'X-Auth-Token': 'e96b093863bd40a6b71baa34f628e13b'}
  }).then(function(response){
    console.log(response);
    return response.data.fixtures;
  });
};


});
