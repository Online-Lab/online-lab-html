'use strict';

angular.module('onlinelabApp')
  .directive('appPopupFeedbackForm', function ($rootScope, Mailer) {
    return {
      templateUrl: 'app/directives/popup-feedback-form/popup-feedback-form.html',
      restrict: 'A',
      link: function (scope, element, attrs) {
        
        //Is the form active
        scope.isActive = false;
        
        //User data
        scope.newOrderData = {
          name: "",
          phone: "",
          email: ""
        };
        // Phone mask
        scope.phoneMask = "+7(999)999-99-99";
        
        //Form and Overlay
        var formElementent = $(element).find('#popup-feedback-form'),
            formOverlay = $(element).find('#popup-feedback-form-overlay');
        //Form elementents
        var nameField = $(element).find('.popup-feedback-form-name'),
            phoneField = $(element).find('.popup-feedback-form-phone'),
            emailField = $(element).find('.popup-feedback-form-email'),
            orderBtn = $(element).find('.popup-feedback-form-btn'),
            messageBlock = $(element).find('.popup-feedback-form-msg');
            
        
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
          else if (scope.newOrderData.emaill == '' ||  !patternEmail.test(scope.newOrderData.email)){
            messageBlock.text("Введите корректный e-mail адрес");
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
              
            setTimeout(function(){
              messageBlock.text("Ваша заявка принята!");
              alert(msg);
              resetForm();
            }, 3000);
            
            /*Mailer.sendEmail(msg).success(function(){
              messageBlock.text("Ваша заявка принята");
              resetForm();
            });*/
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
