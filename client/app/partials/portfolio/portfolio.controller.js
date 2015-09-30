'use strict';

angular.module('onlinelabApp')
  .controller('PortfolioCtrl', function ($scope, $http, Project) {
    //Get portfolio
    $scope.portfolioList = Project.query();
  });
