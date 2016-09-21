// AUTH controller
'use strict';

angular.module('mhApp')
  .controller('AuthCtrl', function($scope, $location, $timeout) {
    const auth = this;
    auth.authSwitch = false;
    auth.loginUser = function(errorMessage) {
      let loginEmail = auth.email;
      let loginPassword = auth.password;
      let uid = null;
      return firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
      .then(function(uid) {
        if (uid === null) {
          $location.path('/auth');
          $timeout();
          return uid;
        }
        if (uid !== null) {
          $location.path('/playlists');
          $timeout();
        }
      })
      .catch(function(error) {
        var errorMessage = error.message;
        console.log(errorMessage);
      });
    };

    auth.createUser = function(username, email, password) {
      let createUsername = auth.username;
      let createEmail = auth.email;
      let createPassword = auth.password;
      return firebase.auth().createUserWithEmailAndPassword(createEmail, createPassword)
      .then(function(uid) {
        if (uid !== null) {
          auth.setUserData(uid, createUsername, createEmail);
          $location.path('/playlists');
          $timeout();
        }
      })
      .catch(function(error) {
        var errorMessage = error.message;
        console.log(errorMessage);
      });
    };

    auth.setUserData = function(uid, username, email) {
      firebase.database().ref('users/' + uid.uid).set({
        username: username,
        email: email
      });
    };
  });
