(function () {
'use strict';

angular.module('LunchChecker', [])
.controller('LunchCheckerController', LunchCheckerController);

LunchCheckerController.$inject = ['$scope'];
function LunchCheckerController($scope) {
  $scope.textbox="".split(',');
  $scope.displayMessage="Hi there!";
   
  $scope.getValue = function (){
  	var lunchValue = checkNumberOfLunchItem($scope.textbox);
    $scope.finalValue = lunchValue;
  };

  function checkNumberOfLunchItem (string) {
  	for (var i = 0; i < string.length; i++) {
  		if (string[i] <= 3){
  			return "Enjoy!";
  		} 
  		else{
  			return "Too much!";
  		}
  	}

  };

}
})();

