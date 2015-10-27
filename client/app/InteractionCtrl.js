"use strict";

/**
 * This controller is used for user interaction
 */
angular.module("onlinelabApp").controller("InteractionCtrl", function($scope, $rootScope){
  
  // Shows popup feedback form
  $scope.showPopupFeedbackForm = function(){
    
    //Emits "popupFeedbackForm.show" event in $rootScope
    $rootScope.$emit("popupFeedbackForm.show");
    
  };
  
});