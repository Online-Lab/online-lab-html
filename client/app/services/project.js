var app = angular.module("onlinelabApp");

app.factory('Project', function($resource){
    return $resource('http://onlinelab-django.production-dokku-1.online-lab.ru/projects/:projectId');
});