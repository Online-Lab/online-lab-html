'use strict';

angular.module('onlinelabApp')
  .controller('PortfolioCtrl', function ($scope, $http) {
    $http.get('/data/db.json').success(function(data){
      $scope.portfolioList = data.portfolio;
    });
  });
