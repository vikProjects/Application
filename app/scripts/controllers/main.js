'use strict';

/**
 * @ngdoc function
 * @name mainappApp.controllerz:MainCtrl
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

angular.module('mainappApp')
  .controller('inboxCtrl', function ($scope) {
    $scope.inboxData = [{'message':'hello rock the world','id':'1','selected':false},{'message':'hello rock the world','id':'2','selected':false},{'message':'hello rock the world','id':'3','selected':false},

      {'message':'hello rock the world','id':'4','selected':false}
    ];
    $scope.addMessage = function(msg)
    {
    	var msglength = $scope.inboxData.length
    	var newMsg ={};
    	newMsg ={'message':msg,'id':parseInt(msglength)+1};
    	$scope.inboxData.push(newMsg);
    	$('#txtMessage').val("");
    };

     $scope.checkAll = function(status)
    {
     var msglength = $scope.inboxData.length;
     for(var i =0 ; i<msglength;i++){
       $scope.inboxData[i].selected=status;
   }
    };

     $scope.checkOne = function(id,oneStatus)
    {
    if(!oneStatus){
    	    var msglength = $scope.inboxData.length;
     for(var i =0 ; i<msglength;i++){
       $scope.inboxData[i].selected=status;
   }

}

    };

  });