'use strict';

angular.module('onlinelabApp')
  .directive('feedbackForm', function (Mailer) {
    return {
      templateUrl: 'app/directives/feedback-form/feedback-form.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        
      }
    };
  });
