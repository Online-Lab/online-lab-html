angular.module('onlinelabApp').directive('pageDescription', ['$rootScope', '$timeout',
  function($rootScope, $timeout) {
    return {
      restrict: 'EA',
      link: function($scope, element) {

        var listener = function(event, toState) {

          $timeout(function() {
            var description = (toState.description) ? toState.description : '';
            $('html head meta[name=description]').attr("content", description);
          });
        };

        $rootScope.$on('$stateChangeSuccess', listener);
      }
    };
  }
]);