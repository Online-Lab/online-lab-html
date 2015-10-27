'use strict';

angular.module('onlinelabApp')
  .directive('appOrderBtn', function () {
    return {
      templateUrl: 'app/directives/order-btn/order-btn.html',
      restrict: 'A',
      link: function (scope, element, attrs) {
      }
    };
  });
