'use strict';

angular.module('onlinelabApp')
  .controller('MainCtrl', function ($scope, $http, Mailer, Project) {

    //Get portfolio
    $scope.portfolioList = Project.query(function(){
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
    
    //Phone mask
    $scope.phoneMask = "+7(999)999-99-99";
    
    //Feedback form message
    $scope.formMessage = "";
    $scope.isFormValid = true;

    //Get consultation
    $scope.order = function(){

      if ($scope.newOrderData.name == ''){
        $scope.isFormValid = false;
        $scope.formMessage = "Введите имя";
        console.log($scope.isFormValid);
      }
      else if ($scope.newOrderData.phone == ''){
        $scope.isFormValid = false;
        $scope.formMessage = "Введите номер телефона";
      }
      else if ($scope.newOrderData.email == ''){
        $scope.isFormValid = false;
        $scope.formMessage = "Введите корректный адрес электронной почты";
      }
      else{
        $scope.isFormValid = true;
        $scope.formMessage = "Подождите...";
        
        //Sending email
        var msg = "Была добавлена новая заявка. Информация о клиенте: <br><br>" + 
          ($scope.newOrderData.name ? "Имя: " + $scope.newOrderData.name + "<br>" : '') + 
          ($scope.newOrderData.email ? "E-mail: " + $scope.newOrderData.email + "<br>" : '') + 
          ($scope.newOrderData.phone ? "Тел.: " + $scope.newOrderData.phone + "<br>" : '');
          
        alert("Заявка отправлена");
        clearForm();

        /*Mailer.sendEmail(msg).success(function(){
          //alert("Ваша заявка принята");
          $scope.formMessage = "Ваша заявка принята";
          //Clear fields
          clearForm();
          
        });*/
      }
      
    };
    
    var clearForm = function(){
      
    };
});
