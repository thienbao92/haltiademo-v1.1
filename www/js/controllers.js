angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.factory('Events', function() {
  var Events = [
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
  return Events;
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
});
