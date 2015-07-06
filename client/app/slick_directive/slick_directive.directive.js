'use strict';

angular.module('onlinelabApp')
  .directive('slickDirective', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
		  $(element).slick( { 
		  infinite: true,
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  prevArrow: '<button type="button" class="green-prev"></button>',
		  nextArrow: '<button type="button" class="green-next"></button>'});
      }
    };
  });
  
  
  
