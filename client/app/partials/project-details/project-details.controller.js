'use strict';

angular.module('onlinelabApp')
  .controller('ProjectDetailsCtrl', function ($scope, $http, $state, Project) {
    //Current project id
    $scope.projectId = $state.params.projectId;
    
    //Get project
    
  });
