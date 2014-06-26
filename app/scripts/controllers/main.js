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




  angular.module('mainappApp')
  .controller('svgCtrl', function ($scope) {
  var svg = d3.select('.svgClass')
   .append("svg")
   .attr("width", 500)
   .attr("height", 500);

   svg.append("circle").attr("cx", 55).attr("cy", 55).attr("r", 45).style("fill", "purple")
   svg.append("ellipse").attr("cx",30).attr("cy",35).attr("rx",5).attr("ry",5).style("fill", "black")
   svg.append("ellipse").attr("cx",75).attr("cy",35).attr("rx",5).attr("ry",5).style("fill", "black")
   svg.append("ellipse").attr("cx",55).attr("cy",77).attr("rx",25).attr("ry",4).style("fill", "red")
   svg.append("rect").attr("x",45).attr("y",73).attr("width",8).attr("height",8).style("fill", "white")
   svg.append("rect").attr("x",55).attr("y",73).attr("width",8).attr("height",8).style("fill", "white")
   svg.append("rect").attr("x",45).attr("y",99).attr("width",20).attr("height",30).style("fill", "white")
   svg.append("circle").attr("cx", 55).attr("cy", 183).attr("r", 55).style("fill", "purple")
   svg.append("rect").attr("x",25).attr("y",230).attr("width",20).attr("height",90).style("fill", "purple")
   svg.append("rect").attr("x",65).attr("y",230).attr("width",20).attr("height",90).style("fill", "purple")
  });








