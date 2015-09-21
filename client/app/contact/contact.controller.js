'use strict';

angular.module('onlinelabApp')
  .controller('ContactCtrl', function ($scope) {
    $scope.marks = [
      {
        address: "Тамбов, Кавалерийская 7а",
        phone: "+7(4752) 341-341",
        pos: {x: 100, y: 100}
      },
      {
        address: "Москва, Ленинский пр-т 30",
        phone: "+7(499) 348-24-43",
        pos: {x: 100, y: 100}
      },
      {
        address: "Rävala puiestee 7, 10145 Tallinn, Эстония",
        phone: "+372 618 8006",
        pos: {x: 100, y: 100}
      },
      {
        address: "54 W 40th St New York, NY 10018",
        phone: " +1(347) 681 244",
        pos: {x: 100, y: 100}
      }
    ];
  });
