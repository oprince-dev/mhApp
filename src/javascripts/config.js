// CONFIG
'use strict';

angular.module('mhApp')

  .config(($routeProvider) => {
    $routeProvider
      .when('/', {
        templateUrl: 'src/partials/Home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/auth', {
        templateUrl: 'src/partials/Auth.html',
        controller: 'AuthCtrl',
        controllerAs: 'auth'
      })
      .when('/playlists', {
        templateUrl: 'src/partials/Playlists.html',
        controller: 'PlaylistsCtrl',
        controllerAs: 'playlists'
      })
      .when('/addmusic', {
        templateUrl: 'src/partials/AddMusic.html',
        controller: 'AddCtrl',
        controllerAs: 'add'
      });
  });
