(function () {
    'use strict';

    angular.module('LunchChecker', [])
    .controller('LunchCheckerController', LunchCheckerController);

    LunchCheckerController.$inject = ['$scope'];
    
    function LunchCheckerController($scope) {
        $scope.item = '';
        
        $scope.check = function () {
            const words = $scope.item.split(' ');

            console.log(words.length);
            for (let i = 0; i < words.length; i++) {
                if (words[i] == '' || words[i] == null) {
                    return $scope.message = 'Please enter items!'; 
                } else if (words.length <= 3) {
                    return $scope.message = 'Enjoy!';
                } else if (words.length > 3) {
                    return $scope.message = 'Too Much!';
                }
            }
        }
    }

})();

