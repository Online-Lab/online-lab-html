'use strict';

angular.module('onlinelabApp')
  .controller('MainCtrl', function ($scope, $http, Mailer) {

    //Phone mask
    $scope.phoneMask = "+7(999)999-99-99";

    //Get portfolio
    $scope.portfolioList = undefined;
    $http.get('/data/db.json').success(function(data){
      $scope.portfolioList = data.portfolio;
      //Current item
      $scope.currentPortfolioItem = $scope.portfolioList[0];
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

    //User data
    $scope.newOrderData = {
      name: "",
      phone: "",
      email: ""
    };

    //Get consultation
    $scope.order = function(){
      var msg = "Была добавлена новая заявка. Информация о клиенте: <br><br>" + 
        ($scope.newOrderData.name ? "Имя: " + $scope.newOrderData.name + "<br>" : '') + 
        ($scope.newOrderData.email ? "E-mail: " + $scope.newOrderData.email + "<br>" : '') + 
        ($scope.newOrderData.phone ? "Тел.: " + $scope.newOrderData.phone + "<br>" : '');

      Mailer.sendEmail(msg).success(function(){
        alert("Ваша заявка принята");
      });
    };
});
