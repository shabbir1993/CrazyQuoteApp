(function(){
	'use strict';
	angular.module('RQApp', [])
	.controller('RQAppController', RQAppController);

	RQAppController.$inject = ['$scope', '$http']
	
	function RQAppController ($scope,$http){

		$scope.getQuote = function(){ $http({
				method : "GET",
				url : "http://quotes.stormconsultancy.co.uk/random.json"
			}).then(function mySuccess(response){
				$scope.myResponse = response.data;
			}, function myError(response){
				$scope.myResponse = response.statusText;
			});
		}
	};
})()