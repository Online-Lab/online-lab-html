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
		  templateUrl: 'app/partials/main/main.html',
		  controller: 'MainCtrl',
		  ncyBreadcrumb: {
			  label: 'Главная'
		  }
      })
	  .state('development', {
      url: '/development',
      templateUrl: 'app/partials/development/development.html',
      controller: 'DevelopmentCtrl',
      ncyBreadcrumb: {
        label: 'Разработка'
      }
      })    
	  .state('projects', {
		  url: '/projects',
		  templateUrl: 'app/partials/projects/projects.html',
		  controller: 'ProjectsCtrl',
		  ncyBreadcrumb: {
			  label: 'Портфолио'
		  }
      })
	  .state('project', {
		  url: '/project',
		  templateUrl: 'app/partials/project/project.html',
		  controller: 'ProjectCtrl',
		  ncyBreadcrumb: {
			  label: 'Проект'
		  }
      })
    .state('blog', {
      url: '/blog',
      templateUrl: 'app/partials/blog/blog.html',
      controller: 'BlogCtrl',
      ncyBreadcrumb: {
        label: 'Наш блог'
      }
      })
    .state('blogpost', {
      url: '/blogpost',
      templateUrl: 'app/partials/blogpost/blogpost.html',
      controller: 'BlogPostCtrl',
      ncyBreadcrumb: {
        label: 'Запись блога'
      }
      })
    .state('team', {
      url: '/team',
      templateUrl: 'app/partials/team/team.html',
      controller: 'TeamCtrl',
      ncyBreadcrumb: { label: 'О нас' }
      })
    .state('mobile', {
        url: '/mobile',
        templateUrl: 'app/partials/mobile/mobile.html',
        controller: 'MobileCtrl',
        ncyBreadcrumb: { label: 'Мобильные приложения' }
      })
    .state('electronics', {
        url: '/electronics',
        templateUrl: 'app/partials/electronics/electronics.html',
        controller: 'ElectronicsCtrl',
        ncyBreadcrumb: { label: 'Электроника' }
      })
    .state('marketing', {
        url: '/marketing',
        templateUrl: 'app/partials/marketing/marketing.html',
        controller: 'MarketingCtrl',
        ncyBreadcrumb: { label: 'Интернет маркетинг' }
      })
    .state('contact', {
        url: '/contact',
        templateUrl: 'app/partials/contact/contact.html',
        controller: 'ContactCtrl',
        ncyBreadcrumb: { label: 'Контакты' }
      })
    .state('vacancies', {
        url: '/vacancies',
        templateUrl: 'app/partials/vacancies/vacancies.html',
        controller: 'VacanciesCtrl',
        ncyBreadcrumb: { label: 'Вакансии' }
      });
	
	
	$urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });