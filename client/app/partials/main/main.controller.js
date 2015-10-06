'use strict';

angular.module('onlinelabApp')
  .controller('MainCtrl', function ($scope, $http, Mailer, Project) {

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
    
    //Phone mask
    $scope.phoneMask = "+7(999)999-99-99";
    
    //Feedback form message
    $scope.formMessage = "";
    $scope.isFormValid = true;

    //Get consultation
    $scope.order = function(){
            
      if(formFeedback.name.$invalid || 
         formFeedback.phone.$invalid ||
         formFeedback.email.$invalid){
        //Valid flag
        $scope.isFormValid = false;
        //Message text
        if (formFeedback.name.$invalid){
          $scope.formMessage = "Введите имя";
        }
        else if (formFeedback.phone.$invalid){
          $scope.formMessage = "Введите номер телефона";
        }
        else if (formFeedback.email.$invalid){
          $scope.formMessage = "Введите корректный адрес электронной почты";
        }
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
