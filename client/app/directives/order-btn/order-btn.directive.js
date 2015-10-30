'use strict';

angular.module('onlinelabApp')
  .directive('appOrderBtn', function () {
    return {
      templateUrl: 'app/directives/order-btn/order-btn.html',
      restrict: 'A',
      scope: {
        yaGoal: "@"
      },
      link: function (scope, element, attrs) {
        
        scope.yaGoal = scope.yaGoal || "";
        
        element.on("click", function(event){
        
          //Yandex Counter
          if (scope.yaGoal){
            yaCounter25463036.reachGoal(scope.yaGoal);
            console.log(scope.yaGoal);
          }
          
        });
        
      }
    };
  });
