'use strict';

angular.module('onlinelabApp')
  .controller('MainCtrl', function ($scope, $http, Mailer, Project) {

    //Get portfolio
    Project.query(function(data){
      //Current item
      $scope.portfolioList = data.data;
      $scope.currentPortfolioItem = $scope.portfolioList[0];
    },
    function(error){
      
    });
    
    //Click project in portfolio slider
    $scope.gotoProject = function(itemIndex, item) {
      //Current item
      $scope.currentPortfolioItem = item;

      //Scroll
      var itemWidth = 234;
      var left = - itemWidth * itemIndex + (itemWidth + itemWidth);
      //correct position
      if (left > 0) 
        left = 0;
      //animate
      $(".cd-slider-nav nav").animate({left: left}, 500);
    };

});
