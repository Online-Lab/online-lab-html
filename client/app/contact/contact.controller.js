'use strict';

angular.module('onlinelabApp')
  .controller('ContactCtrl', function ($scope) {
    $scope.marks = [
      {
        pos: {x: 100, y: 100}
      },
      {
        pos: {x: 300, y: 500}
      }
    ];
  });
