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
    $locationProvider.html5Mode(false).hashPrefix('!');
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/partials/main/main.html',
        controller: 'MainCtrl',
        ncyBreadcrumb: { label: 'Главная' },
        title: 'Сетевая лаборатория – digital-агентство сетевых разработок и маркетинговых решений',
        description: 'Компания Online-lab – комплексное решения создания и продвижения Ваших Интернет-проектов.'
      })
      .state('development', {
        url: '/development',
        templateUrl: 'app/partials/development/development.html',
        controller: 'DevelopmentCtrl',
        ncyBreadcrumb: { label: 'Web-разработка' },
        title: 'Создание сайтов | Разработка интернет-проектов – Online-lab',
        description: 'Сетевая лаборатория – создание интернет-сайтов в Москве, разработка веб-проектов различной сложности. Телефон: +7(499) 112-49-66'
      })
        .state('store', {
          url: '/development/store',
          templateUrl: 'app/partials/store/store.html',
          controller: 'StoreCtrl',
          ncyBreadcrumb: { 
            label: 'Интернет-магазины',
            parent: 'development'
          },
          title: 'Разработка интернет-магазина | Создание сайта интернет-магазина под ключ',
          description: 'Услуги по созданию сложных интернет-магазинов под ключ в Москве. Сетевая лаборатория. Телефон: +7(499) 112-49-66'
        })
        .state('resources', {
          url: '/development/resources',
          templateUrl: 'app/partials/resources/resources.html',
          controller: 'ResourcesCtrl',
          ncyBreadcrumb: { 
            label: 'Интернет-ресурсы',
            parent: 'development'
          },
          title: 'Разработка сайтов | Создание сайтов под ключ',
          description: 'Услуги создания сайтов, разработка сайтов под ключ, . Сетевая лаборатория, тел: +7 (499) 348-24-43'
        })
      .state('mobile', {
        url: '/mobile',
        templateUrl: 'app/partials/mobile/mobile.html',
        controller: 'MobileCtrl',
        ncyBreadcrumb: { label: 'Мобильные приложения' },
        title: 'Создание мобильных приложений | разработка мобильных приложений для IOS и Android',
        description: 'Разработка мобильных приложений под платформы Ios и Android. Сетевая лаборатория. Телефон: +7(499) 112-49-66'
      })
      .state('electronics', { 
        url: '/electronics',
        templateUrl: 'app/partials/electronics/electronics.html',
        controller: 'ElectronicsCtrl',
        ncyBreadcrumb: { label: 'Электроника' },
        title: 'Разработка электронных устройств | Создание электронных устройств на заказ',
        description: 'Разработка электронных устройств под заказ в Москве. Сетевая лаборатория. Телефон: +7(499) 112-49-66'
      })
      .state('marketing', {
        url: '/marketing',
        templateUrl: 'app/partials/marketing/marketing.html',
        controller: 'MarketingCtrl',
        ncyBreadcrumb: { label: 'Интернет-маркетинг' },
        title: 'Комплексный Интернет-маркетинг | Агентство  интернет-продвижения и маркетинга Online-lab',
        description: 'Услуги интернет-маркетинга: поисковое продвижение сайтов, маркетинговые исследования, управление репутацией. Сетевая лаборатория. Телефон: +7(499) 112-49-66'
      })
      .state('smm', {
        url: '/marketing/smm',
        templateUrl: 'app/partials/smm/smm.html',
        controller: 'SmmCtrl',
        ncyBreadcrumb: { 
          label: 'SMM',
          parent: 'marketing'
        },
        title: 'SMM | Продвижение в социальных сетях',
        description: 'Услуги по продвижению в социальных сетях (SMM): Вконтакте, facebook, twitter, Google+. Сетевая лаборатория, тел: +7 (499) 348-24-43'
      })
      .state('traffic', {
        url: '/marketing/traffic',
        templateUrl: 'app/partials/traffic/traffic.html',
        controller: 'TrafficCtrl',
        ncyBreadcrumb: { 
          label: 'SEO-трафик',
          parent: 'marketing'
        },
        title: 'Продвижение по трафику | Наращивание трафика на сайт',
        description: 'Услуги по наращиванию трафика для сайта. Продвижение по трафику порталов и интернет-магазинов. Сетевая лаборатория, тел: +7 (499) 348-24-43'
      })
      .state('position', {
        url: '/marketing/position',
        templateUrl: 'app/partials/position/position.html',
        controller: 'PositionCtrl',
        ncyBreadcrumb: { 
          label: 'SEO-позиции',
          parent: 'marketing'
        },
        title: 'Продвижение по запросам | Оптимизация сайта по ключевым словам',
        description: 'Услуги продвижения сайтов по позициям ключевых слов. Сетевая лаборатория, тел: +7 (499) 348-24-43'
      })
      .state('serm', {
        url: '/marketing/serm',
        templateUrl: 'app/partials/serm/serm.html',
        controller: 'SermCtrl',
        ncyBreadcrumb: { 
          label: 'SERM',
          parent: 'marketing'
        },
        title: 'SERM | Управление репутацией компании в интернете',
        description: 'Услуги по Serm – управлению репутацией в интернете компании или бренда. Сетевая лаборатория, тел: +7 (499) 348-24-43'
      })
      .state('advertising', {
        url: '/marketing/advertising',
        templateUrl: 'app/partials/advertising/advertising.html',
        controller: 'AdvertisingCtrl',
        ncyBreadcrumb: { 
          label: 'Контекстная реклама',
          parent: 'marketing'
        },
        title: 'Контекстная реклама | Создание и настройка кампаний Яндекс-Директ и Google Adwords',
        description: 'Услуги по созданию и ведению контекстной рекламы в Яндекс-Директ и Google Adwords. Сетевая лаборатория, тел: +7 (499) 348-24-43'
      })
      .state('projects', {
        url: '/projects',
        templateUrl: 'app/partials/projects/projects.html',
        controller: 'ProjectsCtrl',
        ncyBreadcrumb: { label: 'Портфолио' },
        title: 'Портфолио – Сетевая Лаборатория',
        description: 'Наше портфолио. Сетевая лаборатория. Телефон: +7(499) 112-49-66'
      })
        .state('project-details', {
          url: '/projects/:projectId',
          templateUrl: 'app/partials/project-details/project-details.html',
          controller: 'ProjectDetailsCtrl',
          ncyBreadcrumb: {
            label: '{{projectName}}',
            parent: 'projects'
          },
          title: 'Портфолио – Сетевая Лаборатория',
          description: 'Портфолио – Сетевая Лаборатория'
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
        title: 'О нас – Сетевая Лаборатория',
        description: 'О компании. Сетевая лаборатория. Телефон: +7(499) 112-49-66'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/partials/contact/contact.html',
        controller: 'ContactCtrl',
        ncyBreadcrumb: { label: 'Контакты' },
        title: 'Контакты – Сетевая Лаборатория',
        description: 'Контакты. Сетевая лаборатория. Телефон: +7(499) 112-49-66'
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
           angular.element(window.document.documentElement);
      $uiViewScroll(element);
      
      function findDomElement (selector) {
        var result = $(selector);
        return (result.length > 0 ? result : null);
      }
    });
  });
