angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope) {
  ionic.Platform.ready(function() {
    // hide the status bar using the StatusBar plugin
    StatusBar.hide();
  });
})

.controller('EventsCtrl', function($scope, Events) {
  $scope.events = Events;
})

.controller('EventCtrl', function($scope, $stateParams, Events) {
  $scope.eventId = parseInt($stateParams.eventId) - 1;
  $scope.events = Events;
})

.factory('News', function() {
  var News = [
    { title: 'Reggae',
     thumbnail:'/img/ionic.png',
     date: '1.11.14',
     content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
     id: 1 },
    { title: 'Chill',
     thumbnail:'/img/ionic.png',
     date: '2.11.14',
     content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
     id: 2 },
    { title: 'Dubstep',
     thumbnail:'/img/ionic.png',
     date: '3.11.14',
     content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', id: 3 },
    { title: 'Haltia´s first special exhibition now at Helsinki-Vantaa airport',
     thumbnail:'/img/ionic.png',
     date: '10.04.2014',
     content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
     id: 4 },
    { title: 'Haltia has rapidly become a popular destination',
     thumbnail:'/img/ionic.png',
     date: '09.06.2014',
     content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
     id: 5 },
    { title: 'Kayaking and canoeing in nuuksio',
     thumbnail:'/img/ionic.png',
     date: '28.06.2014',
     content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
     id: 6 }
  ];
  return News;
})

.controller('NewsCtrl', function($scope, News) {
  $scope.news = News;
})

.controller('ANewsCtrl', function($scope, $stateParams, News) {
  $scope.newsId = parseInt($stateParams.newsId) - 1;
  $scope.news = News;
})

.controller('directionCtrl', function($scope, $cordovaClipboard, $ionicPopup ,$timeout) {
   
   $scope.copy = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Copy address',
     template: 'copy success'
   });
     $timeout(function() {
     alertPopup.close(); //close the popup after 3 seconds for some reason
  }, 1500);
 };
    // end scope


   



}) //end directionCtrl



;

