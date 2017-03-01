import angular from "angular";
import angularUi from "angular-route";

var app = angular.module("nailCrush", ["ngRoute"])
	.config(["$routeProvider", function ($routeProvider) {
	  $routeProvider
	    .when("/landing",
	    {
	        templateUrl: "assets/templates/landing.html"
	    })
	    .when("/services",
	    {
	        templateUrl: "assets/templates/services.html"
	    })
	    .when("/gallery",
	    {
	        templateUrl: "assets/templates/gallery.html"
	    })
	    .when("/contact",
	    {
	        templateUrl: "assets/templates/contact.html"
	    })
	    .otherwise({redirectTo: "/landing"});
}]);
