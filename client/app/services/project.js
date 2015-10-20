var app = angular.module("onlinelabApp");

app.factory('Project', function($resource, $http){
  return {
    query: function(successCallback, errorCallback){
      $http({
        method: 'GET',
        url: 'http://onlinelab-django.production-dokku-1.online-lab.ru/projects/'
      }).then(successCallback, errorCallback);
    },
    get: function(params, successCallback, errorCallback){
      $http({
        method: 'GET',
        url: 'http://onlinelab-django.production-dokku-1.online-lab.ru/projects/' + params.projectId + "/"
      }).then(successCallback, errorCallback);
    }
    
    /*resource doesn't work on Safari (iPad)*/
    //return $resource('http://onlinelab-django.production-dokku-1.online-lab.ru/projects/:projectId');
  }
});