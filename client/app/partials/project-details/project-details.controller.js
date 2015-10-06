'use strict';

angular.module('onlinelabApp')
  .controller('ProjectDetailsCtrl', function ($scope, $http, $state, Project) {
    //Current project id
    $scope.projectId = $state.params.projectId;
    
    //Get project
    $scope.project = Project.get({projectId: $scope.projectId}, function(){
      //Save project header_image to state
      $state.project_image = $scope.project.header_image;
    });
    
    console.dir($scope.project);
  });
