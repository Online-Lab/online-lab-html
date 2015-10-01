'use strict';

angular.module('onlinelabApp')
  .controller('ProjectsCtrl', function ($scope, $http, Project) {
    //Get portfolio
    $scope.portfolioList = Project.query();
  });
