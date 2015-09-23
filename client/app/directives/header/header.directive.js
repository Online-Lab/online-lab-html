/*jshint camelcase: false */

'use strict';

angular.module('onlinelabApp')
	.directive('appHeader', ['$state', function ($state) {
        return {
            restrict: 'E',
            link: function (scope) {      			
      				scope.city_items = [
        				{ city:'Москва',	phone: '+7 (499) 348-24-43', active:'', id:1 },
        				{ city:'Тамбов',	phone: '+7 (4752) 341-341', active:'', id:3 },
        				{ city:'Нью-Йорк',	phone: '+1 (347) 681 244', active:'', id:4 }
      				];

              scope.city_phone = scope.city_items[1].phone;
              scope.current_city = scope.city_items[1].id;

      				scope.changeCity = function (city){
      					scope.city_phone = city.phone;
      					scope.current_city = city.id;
              };
      				
      				scope.state = $state;

            },
            templateUrl: 'app/directives/header/header.html',
            scope: false
        };
    }])

  ;
