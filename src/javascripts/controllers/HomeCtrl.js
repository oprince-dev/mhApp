// HOME CONTROLLER
'use strict';

angular.module('mhApp')
  .controller('HomeCtrl', function($scope, $location) {
    const home = this;
    $scope.toAuth = function() {
      $location.path('auth');
    };
  });
