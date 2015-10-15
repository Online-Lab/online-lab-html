angular.module('onlinelabApp').directive('title', ['$rootScope', '$timeout',
  function($rootScope, $timeout) {
    return {
      link: function() {

        var listener = function(event, toState) {

          $timeout(function() {
            $rootScope.title = (toState.title) ? toState.title : 'Сетевая лаборатория';
          });
        };

        $rootScope.$on('$stateChangeSuccess', listener);
      }
    };
  }
]);