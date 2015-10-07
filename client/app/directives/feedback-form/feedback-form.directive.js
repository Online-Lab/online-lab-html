'use strict';

angular.module('onlinelabApp')
  .directive('feedbackForm', function (Mailer) {
    return {
      templateUrl: 'app/directives/feedback-form/feedback-form.html',
      restrict: 'EA',
      scope: {
        
      },
      link: function ($scope, elem, attrs) {
        //Form elements
        var nameField = $(elem).find('.main-feedback-form-name'),
            phoneField = $(elem).find('.main-feedback-form-phone'),
            emailField = $(elem).find('.main-feedback-form-email'),
            orderBtn = $(elem).find('.main-feedback-form-btn'),
            messageBlock = $(elem).find('.main-feedback-form-msg');
    
        //Get consultation
        $scope.order = function(){

          if (nameField.val() == ''){
            messageBlock.text("Введите имя");
            nameField.focus();
          }
          else if (phoneField.val() == ''){
            messageBlock.text("Введите номер телефона");
            phoneField.focus();
          }
          else if (emailField.val() == ''){
            messageBlock.text("Введите корректный адрес электронной почты");
            emailField.focus();
          }
          else{
            messageBlock.text("Подождите...");
            orderBtn.prop('disabled', true);
            
            //Sending email
            var msg = "Была добавлена новая заявка. Информация о клиенте: <br><br>" + 
              ($scope.newOrderData.name ? "Имя: " + $scope.newOrderData.name + "<br>" : '') + 
              ($scope.newOrderData.email ? "E-mail: " + $scope.newOrderData.email + "<br>" : '') + 
              ($scope.newOrderData.phone ? "Тел.: " + $scope.newOrderData.phone + "<br>" : '');
              
            setTimeout(function(){
              messageBlock.text("Ваша заявка принята");
              clearForm();
            }, 3000);

            /*Mailer.sendEmail(msg).success(function(){
              //alert("Ваша заявка принята");
              $scope.formMessage = "Ваша заявка принята";
              //Clear fields
              clearForm();
              
            });*/
          }
          
        };
        
        var clearForm = function(){
          nameField.val('');
          phoneField.val('');
          emailField.val('');
          orderBtn.prop('disabled', false);
          nameField.focus();
        };
      }
    };
  });
