'use strict';

angular.module('onlinelabApp')
  .directive('orderBtn', function () {
    return {
      templateUrl: 'app/directives/order-btn/order-btn.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
