'use strict';

angular.module('onlinelabApp')
  .directive('sideMenu', function () {
    return {
      templateUrl: 'app/directives/side-menu/side-menu.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
