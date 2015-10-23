'use strict';

angular.module('onlinelabApp')
  .directive('appPopupFeedbackForm', function () {
    return {
      templateUrl: 'app/directives/popup-feedback-form/popup-feedback-form.html',
      restrict: 'EA',
      scope: {
        
      },
      link: function ($scope, elem, attrs) {
        //Form elements
        var nameField = $(elem).find('.popup-feedback-form-name'),
            phoneField = $(elem).find('.popup-feedback-form-phone'),
            emailField = $(elem).find('.popup-feedback-form-email'),
            orderBtn = $(elem).find('.popup-feedback-form-btn');
            
        phoneField.inputmask("+7(999)999-99-99", {
          "clearIncomplete": true
        });
        
        //Get consultation
        $scope.order = function(){
          alert("Click");
        };
      }
    };
  });
