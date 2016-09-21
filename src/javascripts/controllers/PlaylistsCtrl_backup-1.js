// VIEW CONTROLLER
'use strict';

angular.module('mhApp')
  .controller('PlaylistsCtrl', function($scope) {
    const playlists = this;
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    playlists.createNewPlaylist = function(name) {
      var pushPlaylist = playlists.name;
      firebase.database().ref('users/' + uid + '/playlists').push(pushPlaylist);
    };
    playlists.updatePlaylist = (function() {
      var pushPlaylist = playlists.name;
      var dbRef = firebase.database().ref('users/' + uid).child('playlists');
      dbRef.on('child_added', function(snap) {
        var playlistData = document.getElementById('playlist-data');
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.innerHTML = snap.val();
        var delbtn = document.createElement('button');
        delbtn.innerHTML = 'X';
        tr.appendChild(td);
        tr.appendChild(delbtn);
        playlistData.appendChild(tr);
      });
      return user;
    })();

  });
