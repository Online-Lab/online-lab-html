'use strict';

angular.module('onlinelabApp')
  .directive('appLastProjects', function (Project) {
    return {
      templateUrl: 'app/directives/last-projects/last-projects.html',
      restrict: 'A',
      scope:{
        title: "@",
        filterBy: "@"
      },
      link: function (scope, element, attrs) {

        //Count of projects to display
        scope.lastProjectsDisplayCount = 3;
        
        //Get last projects of type
        var lastProjectsFilter = scope.filterBy;
        Project.filterByKind({kind: lastProjectsFilter}, function(responce){
          scope.lastProjectsList = responce.data;
          //Correct count of projects to display
          if (scope.lastProjectsList.length < 3)
            scope.lastProjectsDisplayCount = scope.lastProjectsList.length;
        },
        function(error){
          
        });
            
        //Show more button logic
        scope.showMoreProjects = function(){
          if (scope.lastProjectsList.length <= 3) 
            return;
          
          if (scope.lastProjectsDisplayCount >= scope.lastProjectsList.length)
          {
            scope.lastProjectsDisplayCount = 3;
            if (scope.lastProjectsList.length < 3)
              scope.lastProjectsDisplayCount = scope.lastProjectsList.length;
          }
          else{
            scope.lastProjectsDisplayCount += 3;
          }
        };

      }
    };
  });
