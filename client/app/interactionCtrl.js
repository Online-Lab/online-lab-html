"use strict";

angular.module("onlinelabApp").controller("InteractionCtrl", function($scope){
  
  $scope.isPopupFeedbackFormActive = false;
  
  $scope.showPopupFeedbackForm = function(){
    $scope.isPopupFeedbackFormActive = true;
    
    console.log($scope.isPopupFeedbackFormActive);
  };
});