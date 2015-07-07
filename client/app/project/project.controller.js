'use strict';

angular.module('onlinelabApp')
  .controller('ProjectCtrl', function ($scope, $http) {
	
	$scope.myvar = 14;
    $scope.awesomeThings = [];
	$scope.current = 1;

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

  });
