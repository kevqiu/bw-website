var app = angular.module('index', ['ui.router', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  var rootState = {
    name: 'home',
    url: '/',
    templateUrl: '/html/home.html'
  };
  var aboutState = {
    name: 'about',
    url: '/about',
    templateUrl: '/html/about.html'
  };
  var portfolioState = {
    name: 'portfolio',
    url: '/portfolio',
    templateUrl: '/html/portfolio.html'
  };
  var resumeState = {
    name: 'resume',
    url: '/resume',
    templateUrl: '/html/resume.html'
  };
  var contactState = {
    name: 'contact',
    url: '/contact',
    templateUrl: '/html/contact.html'
  };
	$stateProvider.state(rootState)
                .state(aboutState)
                .state(portfolioState)
                .state(resumeState)
                .state(contactState);
  $urlRouterProvider.otherwise('/');
});

// app.controller("sidebar-controller", function($scope, $location) {
//   $scope.redirect = function(path) {
//     $location.url("/" + path + "/")
//   }
// });
