'use strict';

angular.module('onlinelabApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.mask',
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
        ncyBreadcrumb: { label: 'Главная' },
        title: 'Сетевая лаборатория – digital-агентство сетевых разработок и маркетинговых решений'
      })
      .state('development', {
        url: '/development',
        templateUrl: 'app/partials/development/development.html',
        controller: 'DevelopmentCtrl',
        ncyBreadcrumb: { label: 'Web разработка' },
        title: 'Создание сайтов | Разработка интернет-проектов – Online-lab'
      })
      .state('mobile', {
        url: '/mobile',
        templateUrl: 'app/partials/mobile/mobile.html',
        controller: 'MobileCtrl',
        ncyBreadcrumb: { label: 'Мобильные приложения' },
        title: 'Создание мобильных приложений | разработка мобильных приложений для IOS и Android'
      })
      .state('electronics', {
        url: '/electronics',
        templateUrl: 'app/partials/electronics/electronics.html',
        controller: 'ElectronicsCtrl',
        ncyBreadcrumb: { label: 'Электроника' },
        title: 'Разработка электронных устройств | Создание электронных устройств на заказ'
      })
      .state('marketing', {
        url: '/marketing',
        templateUrl: 'app/partials/marketing/marketing.html',
        controller: 'MarketingCtrl',
        ncyBreadcrumb: { label: 'Интернет маркетинг' },
        title: 'Комплексный Интернет-маркетинг | Агентство  интернет-продвижения и маркетинга Online-lab'
      })
      .state('store', {
        url: '/store',
        templateUrl: 'app/partials/store/store.html',
        controller: 'StoreCtrl',
        ncyBreadcrumb: { label: 'Интернет магазины' },
        title: 'Разработка интернет-магазина | Создание сайта интернет-магазина под ключ'
      })
      .state('projects', {
        url: '/projects',
        templateUrl: 'app/partials/projects/projects.html',
        controller: 'ProjectsCtrl',
        ncyBreadcrumb: { label: 'Портфолио' },
        title: 'Портфолио – Сетевая Лаборатория'
      })
      .state('project-details', {
        url: '/projects/:projectId',
        templateUrl: 'app/partials/project-details/project-details.html',
        controller: 'ProjectDetailsCtrl',
        ncyBreadcrumb: {
          label: '{{projectName}}',
          parent: 'projects'
        }
      })
      .state('blog', {
        url: '/blog',
        templateUrl: 'app/partials/blog/blog.html',
        controller: 'BlogCtrl',
        ncyBreadcrumb: { label: 'Наш блог' }
      })
      .state('blogpost', {
        url: '/blogpost',
        templateUrl: 'app/partials/blogpost/blogpost.html',
        controller: 'BlogPostCtrl',
        ncyBreadcrumb: { label: 'Запись блога' }
      })
      .state('team', {
        url: '/team',
        templateUrl: 'app/partials/team/team.html',
        controller: 'TeamCtrl',
        ncyBreadcrumb: { label: 'О нас' },
        title: 'О нас – Сетевая Лаборатория'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/partials/contact/contact.html',
        controller: 'ContactCtrl',
        ncyBreadcrumb: { label: 'Контакты' },
        title: 'Контакты – Сетевая Лаборатория'
      })
      .state('vacancies', {
        url: '/vacancies',
        templateUrl: 'app/partials/vacancies/vacancies.html',
        controller: 'VacanciesCtrl',
        ncyBreadcrumb: { label: 'Вакансии' },
        title: 'Вакансии – Сетевая Лаборатория'
      });
  
  
  $urlRouterProvider
      .otherwise('/');

    //$locationProvider.html5Mode(true);
  })

  .run(function ($rootScope, $location, $uiViewScroll) {
    $rootScope.$on('$viewContentLoaded',function(){
      //Scroll to top when state changes
      var hash = $location.hash();
      var element =
           findDomElement('#' + hash)|| 
           findDomElement('a[name="' + hash + '"]')||
           angular.element(window.document.body);
      $uiViewScroll(element);
      
      function findDomElement (selector) {
        var result = $(selector);
        return (result.length > 0 ? result : null);
      }
    });
  });