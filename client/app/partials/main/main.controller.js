'use strict';

angular.module('onlinelabApp')
  .controller('MainCtrl', function ($scope, $http) {

    $scope.portfolioList = undefined;
    $http.get('/data/db.json').success(function(data){
      $scope.portfolioList = data.portfolio;
      //Current item
      $scope.currentPortfolioItem = $scope.portfolioList[0];
    });

    //$scope.portfolioSliderLeft = 0;
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
