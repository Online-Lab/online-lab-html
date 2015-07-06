'use strict';

angular.module('onlinelabApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ngMaterial',
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
      });

	
	
	$urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });