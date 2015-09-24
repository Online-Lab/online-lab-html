'use strict';

angular.module('onlinelabApp')
  .controller('ContactCtrl', function ($scope) {
    $scope.selectedMark = null;
    $scope.marks = [
      {
        city: "Тамбов",
        address: "ул. Кавалерийская, д.7а",
        phone: "+7 (4752) 341-341",
        pos: {x: 693, y: 243}
      },
      {
        city: "Москва",
        address: "Ленинский пр-т, д.30",
        phone: "+7 (499) 348-24-43",
        pos: {x: 665, y: 218}
      },
      {
        city: "Tallinn",
        address: "Rävala puiestee 7, 10145 Tallinn, Эстония",
        phone: "+372 618 8006",
        pos: {x: 636, y: 197}
      },
      {
        city: "New York",
        address: "54 W 40th St New York, NY 10018",
        phone: " +1 (347) 681 244",
        pos: {x: 319, y: 294}
      }
    ];

    $scope.selectMark = function(mark){
      $scope.selectedMark = mark;
      console.log("Click:" + $scope.selectedMark.city);
    }
  });
