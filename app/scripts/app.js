'use strict';

/**
 * @ngdoc overview
 * @name mainappApp
 * @description
 * # mainappApp
 *
 * Main module of the application.
 */
  var mainappApp = angular.module('mainappApp', ['ngRoute']);

	// configure our routes
	mainappApp.config(['$routeProvider',function($routeProvider) {
		$routeProvider
			// route for the home page
			.when('/', {
				templateUrl : 'views/main.html',
				controller  : 'MainCtrl'
			})

			// route for the about page
			.when('/inbox', {
				templateUrl : 'views/inbox.html',
				controller  : 'inboxCtrl'
			})

			// route for the contact page
			.when('/buildingchart', {
				templateUrl : 'views/buildingchart.html',
				controller  : 'svgCtrl'
			});
	}]);
