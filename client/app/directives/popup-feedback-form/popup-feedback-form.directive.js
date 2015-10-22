'use strict';

angular.module('onlinelabApp')
  .directive('popupFeedbackForm', function () {
    return {
      templateUrl: 'app/directives/popup-feedback-form/popup-feedback-form.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
