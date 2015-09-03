'use strict';

angular.module('onlinelabApp')
  .controller('ProjectCtrl', function ($scope, $http, $state) {
	
	$scope.myvar = 14;
    $scope.awesomeThings = [];
	$scope.current = 1;
console.log($state);
    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

  });
