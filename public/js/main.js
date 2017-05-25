var app = angular.module('index', ['ui.router', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $urlRouterProvider.otherwise('/');
  var rootState = {
    name: 'home',
    url: '/',
    templateUrl: 'view/home.html'
  };
  var aboutState = {
    name: 'about',
    url: '/about',
    templateUrl: 'view/about.html'
  };
  var portfolioState = {
    name: 'portfolio',
    url: '/portfolio',
    templateUrl: 'view/portfolio.html'
  };
  var resumeState = {
    name: 'testpage',
    url: '/testpage',
    templateUrl: 'view/testpage.html'
  };
  var contactState = {
    name: 'contact',
    url: '/contact',
    templateUrl: 'view/contact.html'
  };
	$stateProvider.state(rootState)
                .state(aboutState)
                .state(portfolioState)
                .state(resumeState)
                .state(contactState);
});

// app.controller("sidebar-controller", function($scope, $location) {
//   $scope.redirect = function(path) {
//     $location.url("/" + path + "/")
//   }
// });
