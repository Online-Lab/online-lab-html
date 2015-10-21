'use strict';

angular.module('onlinelabApp')
  .controller('SmmCtrl', function ($scope Project) {
    
    //Count of projects to display
    $scope.lastProjectsDisplayCount = 3;
    
    //Get last projects of type
    var lastProjectsFilter = 'marketing';
    $scope.lastProjectsList = Project.query({kind: lastProjectsFilter}, function(){
      //Correct count of projects to display
      if ($scope.lastProjectsList.length < 3)
        $scope.lastProjectsDisplayCount = $scope.lastProjectsList.length;
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
