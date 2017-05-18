var app = angular.module("index", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
	$routeProvider
	.when("/", {
		templateUrl: "/view/home.html"
	})
	.when("/about", {
		templateUrl: "/view/about.html"
	})
  .when("/test", {
		templateUrl: "/view/test.html"
	})
	.otherwise({redirectTo:'/'});
});

app.controller("sidebar-controller", function($scope, $location) {
  $scope.redirect = function(path) {
    $location.url("/" + path + "/")
  }
});
