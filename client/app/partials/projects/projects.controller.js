'use strict';

angular.module('onlinelabApp')
  .controller('ProjectsCtrl', function ($scope, $http, Project) {
    
    //Get portfolio
    Project.query(function(data){
      //Current item
      $scope.portfolioList = data.data;
      $scope.currentPortfolioItem = $scope.portfolioList[0];
    },
    function(error){
      
    });
    
  });
