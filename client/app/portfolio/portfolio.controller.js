'use strict';

angular.module('onlinelabApp')
  .controller('PortfolioCtrl', function ($scope, $http) {
    $http.get('/db.json').success(function(data){
      $scope.portfolioList = data.portfolio;
    });
  });
