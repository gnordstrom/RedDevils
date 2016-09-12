angular.module('RedDevils', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    // controller: 'homeCtrl',
    templateUrl: 'views/home/home.html'
  })
  .state('results', {
    url: '/results',
    controller: 'resultsCtrl',
    templateUrl: 'views/results/results.html'
  })
  .state('roster', {
    url: '/roster',
    controller: 'rosterCtrl',
    templateUrl: 'views/roster/roster.html'
  })
  .state('schedule', {
    url: '/schedule',
    controller: 'scheduleCtrl',
    templateUrl: 'views/schedule/schedule.html'
  })
  .state('table', {
    url: '/table',
    controller: 'tableCtrl',
    templateUrl: 'views/table/table.html'
  });

});
