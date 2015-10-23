'use strict';

angular.module('onlinelabApp')
  .directive('appPopupFeedbackForm', function (Mailer) {
    return {
      templateUrl: 'app/directives/popup-feedback-form/popup-feedback-form.html',
      restrict: 'EA',
      scope: {
        
      },
      link: function ($scope, elem, attrs) {
        
        //Form and Overlay
        var formElement = $(elem).find('#popup-feedback-form'),
            formOverlay = $(elem).find('#popup-feedback-form-overlay');
        //Form elements
        var nameField = $(elem).find('.popup-feedback-form-name'),
            phoneField = $(elem).find('.popup-feedback-form-phone'),
            emailField = $(elem).find('.popup-feedback-form-email'),
            orderBtn = $(elem).find('.popup-feedback-form-btn'),
            messageBlock = $(elem).find('.popup-feedback-form-msg');
            
        phoneField.inputmask("+7(999)999-99-99", {
          "clearIncomplete": true
        });
        
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
            messageBlock.text("Введите корректный e-mail адрес");
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
              
            /*setTimeout(function(){
              messageBlock.text("Ваша заявка принята!");
              clearForm();
            }, 3000);*/
            
            Mailer.sendEmail(msg).success(function(){
              messageBlock.text("Ваша заявка принята");
              clearForm();
            });
          }
          
        };
        
        function clearForm() {
          nameField.val('');
          phoneField.val('');
          emailField.val('');
          orderBtn.prop('disabled', false);
          nameField.focus();
        };
        
        
        //Hide form by clicking on overlay
        formOverlay.on("click", function(event){
          //If form was clicked, ignore event
          if ( $(event.target).attr('id') != "popup-feedback-form-overlay" ) return;
          
          //Reset error classes
          nameField.removeClass("error");
          phoneField.removeClass("error");
          emailField.removeClass("error");
          //Reset fields values
          nameField.val('');
          phoneField.val('');
          emailField.val('');
          //Reset message box text
          messageBlock.text("");
          //Enable submit button
          orderBtn.prop('disabled', false);
          
          //Hide form and overlay with css
          formOverlay.removeClass("popup-feedback-form-active");
          formElement.removeClass("popup-feedback-form-active");
        });
      }
    };
  });
