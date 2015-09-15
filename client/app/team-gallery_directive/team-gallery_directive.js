'use strict';

angular.module('onlinelabApp')
  .directive('teamGallery', function () {
    return {
      templateUrl: 'app/team-gallery_directive/team-gallery_directive.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        scope.teamPhotos = [
          {
            smallPhoto: "../../assets/images/team-gallery/small/1.jpg",
            largePhoto: "../../assets/images/team-gallery/large/1.jpg"
          },
          {
            smallPhoto: "../../assets/images/team-gallery/small/2.jpg",
            largePhoto: "../../assets/images/team-gallery/large/2.jpg"
          },
          {
            smallPhoto: "../../assets/images/team-gallery/small/3.jpg",
            largePhoto: "../../assets/images/team-gallery/large/3.jpg"
          },
          {
            smallPhoto: "../../assets/images/team-gallery/small/4.jpg",
            largePhoto: "../../assets/images/team-gallery/large/4.jpg"
          },
          {
            smallPhoto: "../../assets/images/team-gallery/small/5.jpg",
            largePhoto: "../../assets/images/team-gallery/large/5.jpg"
          },
          {
            smallPhoto: "../../assets/images/team-gallery/small/6.jpg",
            largePhoto: "../../assets/images/team-gallery/large/6.jpg"
          },
          {
            smallPhoto: "../../assets/images/team-gallery/small/7.jpg",
            largePhoto: "../../assets/images/team-gallery/large/7.jpg"
          },
          {
            smallPhoto: "../../assets/images/team-gallery/small/8.jpg",
            largePhoto: "../../assets/images/team-gallery/large/8.jpg"
          },
          {
            smallPhoto: "../../assets/images/team-gallery/small/9.jpg",
            largePhoto: "../../assets/images/team-gallery/large/9.jpg"
          },
          {
            smallPhoto: "../../assets/images/team-gallery/small/10.jpg",
            largePhoto: "../../assets/images/team-gallery/large/10.jpg"
          },
          {
            smallPhoto: "../../assets/images/team-gallery/small/11.jpg",
            largePhoto: "../../assets/images/team-gallery/large/11.jpg"
          },
          {
            smallPhoto: "../../assets/images/team-gallery/small/12.jpg",
            largePhoto: "../../assets/images/team-gallery/large/12.jpg"
          },
          {
            smallPhoto: "../../assets/images/team-gallery/small/13.jpg",
            largePhoto: "../../assets/images/team-gallery/large/13.jpg"
          },
          {
            smallPhoto: "../../assets/images/team-gallery/small/14.jpg",
            largePhoto: "../../assets/images/team-gallery/large/14.jpg"
          },
          {
            smallPhoto: "../../assets/images/team-gallery/small/15.jpg",
            largePhoto: "../../assets/images/team-gallery/large/15.jpg"
          },
          {
            smallPhoto: "../../assets/images/team-gallery/small/16.jpg",
            largePhoto: "../../assets/images/team-gallery/large/16.jpg"
          }
        ];

        //Add small images
        for (var i=0; i< scope.teamPhotos.length; i++){
          var img = $('<img src="' + scope.teamPhotos[i].smallPhoto + '">');
          img
            .click(function(){
              changePhoto(this);
            })
            .hover(function(){
              changePhoto(this);
            });
          $($('#team-gallery td.team-gallery-small-img')[i]).append(img);
        }
        //Add large image
        var largeImg = $('<img src="' + scope.teamPhotos[0].largePhoto + '">');
        $('#team-gallery td.team-gallery-large-img').append(largeImg);


        //Change photo function
        var changePhoto = function(elem){
          var url = $(elem).attr('src');
          url = url.replace('small', 'large');
          
          //Add large image
          var largeImg = $('<img src="' + url + '">');
          $('#team-gallery td.team-gallery-large-img').empty();
          $('#team-gallery td.team-gallery-large-img').append(largeImg);
        }
      }
    };
  });