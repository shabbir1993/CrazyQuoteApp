(function () {
    'use strict';
    angular.module('RQApp', [])
        .controller('RQAppCtrl', RQAppCtrl);

    RQAppCtrl.$inject = ["$scope", "$http"];

    function RQAppCtrl($scope, $http) {

        var onSuccess = function (response) {
            $scope.quoteData = response.data;
        }

        var onFailure = function (reason) {
            $scope.quoteData = "";
            $scope.message = "Unable to fetch data";
        }
        $scope.getQuote = function(){
            $http.get("http://quotes.stormconsultancy.co.uk/random.json")
            .then(onSuccess, onFailure);
        }
    }
})();