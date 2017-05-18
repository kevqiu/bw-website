var app = angular.module('index', ['ui.router', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  var rootState = {
    name: 'home',
    url: '/',
    templateUrl: '/view/home.html'
  };
  var aboutState = {
    name: 'about',
    url: '/about',
    templateUrl: '/view/about.html'
  };
  var testState = {
    name: 'test',
    url: '/test',
    templateUrl: '/view/test.html'
  };
	$stateProvider.state(rootState)
                .state(aboutState)
                .state(testState);
  $urlRouterProvider.otherwise('/');
});

// app.controller("sidebar-controller", function($scope, $location) {
//   $scope.redirect = function(path) {
//     $location.url("/" + path + "/")
//   }
// });
