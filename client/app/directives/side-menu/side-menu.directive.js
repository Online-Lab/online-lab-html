'use strict';

angular.module('onlinelabApp')
  .directive('appSideMenu', function ($rootScope) {
    return {
      templateUrl: 'app/directives/side-menu/side-menu.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        
        // Listen to "$viewContentLoaded" event on $rootScope in order to hide side-menu when page is refreshed or location was changed
        $rootScope.$on("$viewContentLoaded", function(event){
          
          if (isSideMenuActive)
            showHideSideMenu();//tis function is defined in script on side-menu.html page
          
        });
        
      }
    };
  });
