// VIEW CONTROLLER
'use strict';

angular.module('mhApp')
  .controller('PlaylistsCtrl', function($scope) {
    const playlists = this;
    $scope.pink = 'pink';
    playlists.createNewPlaylist = function(name) {
      var user = firebase.auth().currentUser;
      var uid = user.uid;
      var pushPlaylist = playlists.name;
      firebase.database().ref('users/' + uid + '/playlists').push(pushPlaylist);
      console.log();
    };
    playlists.updatePlaylist = (function() {
      var user = firebase.auth().currentUser;
      var uid = user.uid;
      var pushPlaylist = playlists.name;
      var dbRef = firebase.database().ref('users/' + uid).child('playlists');
      // var row = table.row;
      // var td = document.createElement('td');
      dbRef.on('child_added', function(snap) {
        var playlistData = document.getElementById('playlist-data');
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.innerHTML = snap.val();
        tr.appendChild(td);
        playlistData.appendChild(tr);
      });
      return user;
    })();

  });
