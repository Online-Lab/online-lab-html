'use strict';

angular.module('onlinelabApp')
	.directive('appFooter', function () {
        return {
            templateUrl: 'app/directives/footer/footer.html',
			      restrict: 'E',
            scope: false
        };
    })

  ;
