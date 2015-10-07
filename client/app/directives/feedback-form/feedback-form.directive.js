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

          var patternEmail = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
          //reset error classes
          nameField.removeClass("error");
          phoneField.removeClass("error");
          emailField.removeClass("error");
          
          if (nameField.val() == ''){
            messageBlock.text("Введите имя");
            nameField.addClass("error");
            nameField.focus();
          }
          else if (phoneField.val() == ''){
            messageBlock.text("Введите номер телефона");
            phoneField.addClass('error');
            phoneField.focus();
          }
          else if (emailField.val() == '' ||  !patternEmail.test(emailField.val())){
            messageBlock.text("Введите корректный адрес электронной почты");
            emailField.addClass("error");
            emailField.focus();
          }
          else{
            messageBlock.text("Подождите...");
            orderBtn.prop('disabled', true);
            
            //User data
            var newOrderData = {
              name: nameField.val(),
              phone: phoneField.val(),
              email: emailField.val()
            };
            //Sending email
            var msg = "Была добавлена новая заявка. Информация о клиенте: <br><br>" + 
              (newOrderData.name ? "Имя: " + newOrderData.name + "<br>" : '') + 
              (newOrderData.email ? "E-mail: " + newOrderData.email + "<br>" : '') + 
              (newOrderData.phone ? "Тел.: " + newOrderData.phone + "<br>" : '');
              
            setTimeout(function(){
              messageBlock.text("Ваша заявка принята");
              clearForm();
            }, 3000);

            /*Mailer.sendEmail(msg).success(function(){
              messageBlock.text("Ваша заявка принята");
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
