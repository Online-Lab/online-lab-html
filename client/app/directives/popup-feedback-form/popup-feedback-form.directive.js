'use strict';

angular.module('onlinelabApp')
  .directive('appPopupFeedbackForm', function ($rootScope, Mailer) {
    return {
      templateUrl: 'app/directives/popup-feedback-form/popup-feedback-form.html',
      restrict: 'A',
      link: function (scope, element, attrs) {
        
        scope.isActive = false;
        
        //Form and Overlay
        var formElementent = $(element).find('#popup-feedback-form'),
            formOverlay = $(element).find('#popup-feedback-form-overlay');
        //Form elementents
        var nameField = $(element).find('.popup-feedback-form-name'),
            phoneField = $(element).find('.popup-feedback-form-phone'),
            emailField = $(element).find('.popup-feedback-form-email'),
            orderBtn = $(element).find('.popup-feedback-form-btn'),
            messageBlock = $(element).find('.popup-feedback-form-msg');
            
        // Phone mask
        phoneField.inputmask("+7(999)999-99-99", {
          "clearIncomplete": true
        });
        
        //Get consultation
        scope.order = function(){

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
              resetForm();
            }, 3000);*/
            
            Mailer.sendEmail(msg).success(function(){
              messageBlock.text("Ваша заявка принята");
              resetForm();
            });
          }
          
        };

        //Hide form by clicking on overlay
        element.on("click", function(event){
          
          //If form was clicked, ignore event
          if ( $(event.target).attr('id') != "popup-feedback-form-overlay" ) return;
          
          scope.$apply(function(){
            $rootScope.$emit("popupFeedbackForm.close");
          });
        });
        
        // Listen to "popupFeedbackForm.show" event on $rootScope
        $rootScope.$on("popupFeedbackForm.show", function(event){
          
          scope.isActive = true;
          
        });
        
        // Listen to "popupFeedbackForm.close" event on $rootScope
        $rootScope.$on("popupFeedbackForm.close", function(event){
          
          scope.isActive = false;
          
        });
        

        // Reset form elements
        function resetForm() {
          nameField.val('');
          phoneField.val('');
          emailField.val('');
          orderBtn.prop('disabled', false);
          nameField.focus();
        };
        
      }
    };
  });
