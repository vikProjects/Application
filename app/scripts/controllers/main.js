'use strict';

/**
 * @ngdoc function
 * @name mainappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mainappApp
 */
angular.module('mainappApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
