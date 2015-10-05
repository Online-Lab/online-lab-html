'use strict';

angular.module('onlinelabApp')
  .controller('DevelopmentCtrl', function ($scope, $http) {
  
  // Workflow list
  $scope.workflow = [
    {
      name: 'Бриф',
      desc: 'Мы вышлем вам бланк с вопросами. Ответы помогут нам понять, каким должен быть сайт.',
      ico: '/assets/images/development/workflow1.png'
    },
    {
      name: 'Коммерческое предложение',
      desc: 'Из него вы узнаете предварительную стоимость и сроки всего проекта.',
      ico: '/assets/images/development/workflow2.png'
    },
    {
      name: 'Техническое задание',
      desc: 'Мы создадим ТЗ для наших программистов, дизайнеров, копирайтеров. В нём будут подробно описаны все задачи и сроки. Мы согласуем его с вами, чтобы вы получили именно то, что хотите – точно в срок.',
      ico: '/assets/images/development/workflow3.png'
    },
    {
      name: 'Стратегия',
      desc: 'На основе брифа мы сформулируем универсальную идею продукта, а также подготовим общую стратегию развития интернет-проекта.',
      ico: '/assets/images/development/workflow4.png'
    },
    {
      name: 'Дизайн',
      desc: 'Творческий отдел разработает адаптивный дизайн для интернет-проектов, основываясь на аналитических данных. На данном этапе можно оценить, удобен ли продукт.',
      ico: '/assets/images/development/workflow5.png'
    },
    {
      name: 'Разработка',
      desc: 'Наши front-end и back-end разработчики программируют на PHP, применяют новейшие фреймворки, интегрируют сайт и «1С-Битрикс», ведут мобильную разработку, в общем оживляют проекты и реализуют функциональность сайта. ',
      ico: '/assets/images/development/workflow6.png'
    },
    {
      name: 'Запуск',
      desc: 'Тестируем продукт на исключение ошибок. Запускаем готовый сайт.',
      ico: '/assets/images/development/workflow7.png'
    },
    {
      name: 'Поддержка',
      desc: 'Вместе мы обеспечим стабильную техническую и оперативную информационную поддержку.',
      ico: '/assets/images/development/workflow8.png'
    }
  ];

});
