'use strict';

angular.module('onlinelabApp')
  .controller('StoreCtrl', function ($scope, Project) {
    //Get last prijects
    $scope.lastProjectsList = Project.query();
    console.dir($scope.lastProjectsList);
  });
