/*jshint camelcase: false */

'use strict';

angular.module('onlinelabApp')
	.directive('appHeader', ['$state', function ($state) {
        return {
            restrict: 'E',
            link: function (scope) {      			
      				scope.cities = [
        				{ name:'Москва',	phone: '+7 (499) 348-24-43' },
        				{ name:'Тамбов',	phone: '+7 (4752) 341-341' },
        				{ name:'Нью-Йорк',	phone: '+1 (347) 681 244' }
      				];

              scope.currentCity = scope.cities[0];
              scope.city_phone = scope.cities[0].phone;

      				scope.changeCity = function (city){
                scope.currentCity = city;
      					scope.city_phone = city.phone;
              };
      				
      				scope.state = $state;

            },
            templateUrl: 'app/directives/header/header.html',
            scope: false
        };
    }])

  ;
