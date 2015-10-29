'use strict';

angular.module('onlinelabApp')
  .directive('feedbackForm', function (Mailer) {
    return {
      templateUrl: 'app/directives/feedback-form/feedback-form.html',
      restrict: 'EA',
      scope: {
        
      },
      link: function (scope, elem, attrs) {
        //Form elements
        var nameField = $(elem).find('.main-feedback-form-name'),
            phoneField = $(elem).find('.main-feedback-form-phone'),
            emailField = $(elem).find('.main-feedback-form-email'),
            orderBtn = $(elem).find('.main-feedback-form-btn'),
            messageBlock = $(elem).find('.main-feedback-form-msg');
            
        //User data
        scope.newOrderData = {
          name: "",
          phone: "",
          email: ""
        };
        //Phone mask
        scope.phoneMask = "+7(999)999-99-99";
    
        //Get consultation
        scope.order = function(){

          var patternEmail = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
          //reset error classes
          nameField.removeClass("error");
          phoneField.removeClass("error");
          emailField.removeClass("error");
          
          if (scope.newOrderData.name == ''){
            messageBlock.text("Введите имя");
            nameField.addClass("error");
            nameField.focus();
          }
          else if (scope.newOrderData.phone == ''){
            messageBlock.text("Введите номер телефона");
            phoneField.addClass('error');
            phoneField.focus();
          }
          else if (scope.newOrderData.email == '' ||  !patternEmail.test(scope.newOrderData.email)){
            messageBlock.text("Введите корректный адрес электронной почты");
            emailField.addClass("error");
            emailField.focus();
          }
          else{
            messageBlock.text("Подождите...");
            orderBtn.prop('disabled', true);
            
            //Sending email
            var msg = "Была добавлена новая заявка. Информация о клиенте: <br><br>" + 
              (scope.newOrderData.name ? "Имя: " + scope.newOrderData.name + "<br>" : '') + 
              (scope.newOrderData.email ? "E-mail: " + scope.newOrderData.email + "<br>" : '') + 
              (scope.newOrderData.phone ? "Тел.: " + scope.newOrderData.phone + "<br>" : '');
              
            /*setTimeout(function(){
              messageBlock.text("Ваша заявка принята");
              alert(msg);
              resetForm();
            }, 3000);*/

            Mailer.sendEmail(msg).success(function(){
              messageBlock.text("Ваша заявка принята");
              resetForm();
              //Yandex Counter
              yaCounter25463036.reachGoal('otpravka2');
            });
          }
          
        };
        
        var resetForm = function(){
          scope.newOrderData.name = "";
          scope.newOrderData.phone = "";
          scope.newOrderData.email = "";
          orderBtn.prop('disabled', false);
          nameField.focus();
        };
      }
    };
  });
