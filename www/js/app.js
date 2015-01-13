// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
  'ionic',
  'ngCordova',
  'starter.controllers', 
  'mapcontroller', 
  'newsServices', 
  'menu.controller',
  'contact.controller',
  'galleryServices',
  'gallery.controller'
  ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})



.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'menuCtrl'
    })

    .state('app.events', {
      url: "/events",
      views: {
        'menuContent' :{
          templateUrl: "templates/events.html",
          controller: 'EventsCtrl'

        }
      }
    })

    .state('app.feedback', {
      url: "/feedback",
      views: {
        'menuContent' :{
          templateUrl: "templates/feedback.html",
          controller: 'ContactCtrl'

        }
      }
    })

    .state('app.event', {
      url: "/events/:eventId",
      views: {
        'menuContent' :{
          templateUrl: "templates/event.html",
          controller: 'EventCtrl'
        }
      }
    })

    .state('app.map', {
      url: "/map",
      views: {
        'menuContent' :{
          templateUrl: "templates/map.html",
          controller: 'MapCtrl'
        }
      }
    })

        .state('app.direction', {
      url: "/direction",
      views: {
        'menuContent' :{
          templateUrl: "templates/direction.html",
          controller: 'directionCtrl'
        }
      }
    })

        .state('app.gallery', {
      url: "/gallery",
      views: {
        'menuContent' :{
          templateUrl: "templates/gallery.html",
          controller: 'GalleryCtrl'
        }
      }
    })

    .state('app.slide-show', {
      url: "/gallery/:photoId",
      views: {
        'menuContent' :{
          templateUrl: "templates/slide-show.html",
          controller: 'SlideShowCtrl'
        }
      }
    })

    .state('app.news', {
      url: "/news",
      views: {
        'menuContent' :{
          templateUrl: "templates/news.html",
          controller: 'NewsCtrl'
        }
      }
    })

    .state('app.anews', {
      url: "/news/:newsId",
      views: {
        'menuContent' :{
          templateUrl: "templates/anews.html",
          controller: 'ANewsCtrl'
        }
      }
    })

        
    ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/direction');
});

