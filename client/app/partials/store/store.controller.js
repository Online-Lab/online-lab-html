'use strict';

angular.module('onlinelabApp')
  .controller('StoreCtrl', function ($scope, Project) {
    
    //Count of projects to display
    $scope.lastProjectsDisplayCount = 3;
    
    //Get last projects of type
    var lastProjectsFilter = 'store';
    Project.filterByKind({kind: lastProjectsFilter}, function(responce){
      $scope.lastProjectsList = responce.data;
      
      //Correct count of projects to display
      if ($scope.lastProjectsList.length < 3)
        $scope.lastProjectsDisplayCount = $scope.lastProjectsList.length;
    },
    function(error){
      
    });
        
    //Show more button logic
    $scope.showMoreProjects = function(){
      if ($scope.lastProjectsList.length <= 3) 
        return;
      
      if ($scope.lastProjectsDisplayCount >= $scope.lastProjectsList.length)
      {
        $scope.lastProjectsDisplayCount = 3;
        if ($scope.lastProjectsList.length < 3)
          $scope.lastProjectsDisplayCount = $scope.lastProjectsList.length;
      }
      else{
        $scope.lastProjectsDisplayCount += 3;
      }
    };
    
  });
