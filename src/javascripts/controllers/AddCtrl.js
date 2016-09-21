// ADD CONTROLLER
'use strict';

angular.module('mhApp')
  .controller('AddCtrl', function($scope, $timeout) {
    function writeUserData(userId) {
      firebase.database().ref('users/' + userId).set({
        username: name,
        email: email
      });
    }
    const add = this;
    $scope.songsToAdd = [];
    this.Logo = "mhApp";
    this.ViewMusic = "View Music";
    this.AddMusic = "Add Music";
  });
