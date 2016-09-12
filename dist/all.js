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

angular.module('RedDevils').directive('showTime', function() {
  return {
    restrict: 'E',
    templateUrl: './directives/clockTemplate.html',
    link: function(scope, element, attrs) {
      var currentTime = new Date();
      scope.time = currentTime;
    }
  };
});

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

angular.module('RedDevils').controller('homeCtrl', function($scope, mainSrv){
  $scope.
});

angular.module('RedDevils').controller('resultsCtrl', function($scope, mainSrv){
  mainSrv.getResults().then(function(data) {
    console.log(data);
    // moment();
    // console.log('moment: ', moment());
    // console.log(moment(data[0].date).format('MMMM Do YYYY'));
    $scope.results = data;
  });
});

angular.module('RedDevils').controller('rosterCtrl', function($scope, mainSrv){
  mainSrv.getRoster().then(function(data) {
    $scope.players = data.players;
  });
});

angular.module('RedDevils').controller('scheduleCtrl', function($scope, mainSrv){
  mainSrv.getSchedule().then(function(data) {
    console.log(data);
    // moment();
    // console.log('moment: ', moment());
    // console.log(moment(data[0].date).format('MMMM Do YYYY'));
    $scope.schedule = data;
  });
});

var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
	}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++) {
	//add click listeners to squares
		squares[i].addEventListener("click", function(){
			// grab color of clicked square
			var clickedColor = this.style.background;
			// compare color to pickedColor
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again!";
			}
		});
	}
}

function reset(){
	// when clicked, generate all new colors
	colors = generateRandomColors(numSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	// change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	// remove "correct" message
	messageDisplay.textContent = "";
	// change colors of square on page
	for(var i = 0; i <squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

// *********** RESET BUTTON ***************
resetButton.addEventListener("click", function(){
	reset();
	})

colorDisplay.textContent = pickedColor;


// ********** FUNCTIONS ************
function changeColors(color){
	// loop through all squares
	for(var i = 0; i < squares.length; i++){
	// change each color to match given color
		squares[i].style.background = color;
		}
	}

function pickColor(){
	//pick a random number
	var random = Math.floor(Math.random() * colors.length);
	//use number to access color from array
	return colors[random];
}

function generateRandomColors(num){
	// make an array
	var arr = [];
	// repeat num times
	for(var i = 0; i < num; i++){
		// get random color and push into array
		arr.push(randomColor());
		}
	// return that array
	return arr;
}

// Random RGB Color
function randomColor(){
	// pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	// pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

angular.module('RedDevils').controller('tableCtrl', function($scope, mainSrv){
  mainSrv.getTable().then(function(data) {
    console.log(data);
    $scope.table = data;
  });
});
