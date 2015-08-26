'use strict';

angular.module('onlinelabApp')
	.directive('appFooter', function () {
        return {
            templateUrl: 'app/footer_directive/footer_directive.html',
			restrict: 'E',
            scope: false
        };
    })

  ;
