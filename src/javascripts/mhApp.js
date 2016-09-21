'use strict';

angular.module('mhApp', ['ngRoute']);

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA0X9IDXquPgg0HkcUqdorUlP4_1whJdTY",
  authDomain: "mhapp-7f090.firebaseapp.com",
  databaseURL: "https://mhapp-7f090.firebaseio.com",
  storageBucket: "mhapp-7f090.appspot.com",
  messagingSenderId: "297451503930"
};
firebase.initializeApp(config);
