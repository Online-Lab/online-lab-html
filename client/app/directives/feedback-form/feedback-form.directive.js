'use strict';

angular.module('onlinelabApp')
  .directive('feedbackForm', function (Mailer) {
    return {
      templateUrl: 'app/directives/feedback-form/feedback-form.html',
      restrict: 'EA',
      scope: {
        
      },
      link: function ($scope, elem, attrs) {
        //Inputs
        var nameField = $(elem).find('.main-feedback-form-name'),
            phoneField = $(elem).find('.main-feedback-form-phone'),
            emailField = $(elem).find('.main-feedback-form-email');
        
        //User data
        $scope.newOrderData = {
          name: "",
          phone: "",
          email: ""
        };
        
        //Feedback form message
        $scope.formMessage = "";
        $scope.isFormValid = true;
    
        //Get consultation
        $scope.order = function(){

          if (nameField.val() == ''){
            $scope.isFormValid = false;
            $scope.formMessage = "Введите имя";
            nameField.focus();
          }
          else if (phoneField.val() == ''){
            $scope.isFormValid = false;
            $scope.formMessage = "Введите номер телефона";
            phoneField.focus();
          }
          else if (emailField.val() == ''){
            $scope.isFormValid = false;
            $scope.formMessage = "Введите корректный адрес электронной почты";
            emailField.focus();
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
      }
    };
  });
