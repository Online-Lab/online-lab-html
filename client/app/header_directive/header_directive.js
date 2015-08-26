/*jshint camelcase: false */

'use strict';

angular.module('onlinelabApp')
	.directive('appHeader', ['$state', function ($state) {
        return {
            restrict: 'E',
            link: function (scope) {
				scope.current_city = 3;
				scope.city_phone = '+7 960 222 22 22';
			
				scope.city_items = [
				{city:'Москва', 			number: '+7 960 000 00 00', active:'', id:1},
				{city:'Санкт-Петербург', 	number: '+7 960 111 11 11',	active:'', id:2},
				{city:'Тамбов',				number: '+7 960 222 22 22', active:'', id:3},
				{city:'Нью-Йорк', 			number: '+7 960 333 33 33', active:'', id:4}
				];
				scope.changeCity = function (){
					
				};
				scope.city_click = function (item){
					scope.city_phone = item.number;
					scope.current_city = item.id;
				};
				
				scope.state = $state;

            },
            templateUrl: 'app/header_directive/header_directive.html',
            scope: false
        };
    }])

  ;
