'use strict';

angular.module('onlinelabApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ncy-angular-breadcrumb'
])
  .config(function($breadcrumbProvider) {
    $breadcrumbProvider.setOptions({
      prefixStateName: 'main',
	  templateUrl: 'app/veiws/breadcrumbs_tpl.html'
    });
  })
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
	  $stateProvider
      .state('main', {
		  url: '/',
		  templateUrl: 'app/main/main.html',
		  controller: 'MainCtrl',
		  ncyBreadcrumb: {
			  label: 'Главная'
		  }
      })
	  
	  .state('portfolio', {
		  url: '/portfolio',
		  templateUrl: 'app/portfolio/portfolio.html',
		  controller: 'PortfolioCtrl',
		  ncyBreadcrumb: {
			  label: 'Портфолио'
		  }
      })
	  .state('project', {
		  url: '/project',
		  templateUrl: 'app/project/project.html',
		  controller: 'ProjectCtrl',
		  ncyBreadcrumb: {
			  label: 'Проект'
		  }
      });
	
	
	$urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });