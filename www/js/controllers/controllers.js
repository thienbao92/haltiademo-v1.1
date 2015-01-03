angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope) {
  ionic.Platform.ready(function() {
    // hide the status bar using the StatusBar plugin
  
  });
})

.controller('EventsCtrl', function($scope, Events) {
  $scope.events = Events;
})

.controller('EventCtrl', function($scope, $stateParams, Events) {
  $scope.eventId = parseInt($stateParams.eventId) - 1;
  $scope.events = Events;
})

.controller('NewsCtrl', function($scope, News) {
  $scope.news = News;
})

.controller('ANewsCtrl', function($scope, $stateParams, News) {
  $scope.newsId = parseInt($stateParams.newsId) - 1;
  $scope.news = News;
})

.controller('CameraCtrl', function ($scope, $cordovaCamera) {
    $scope.takePicture = function () {
      var options = {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 300,
        targetHeight: 300,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: true
      };

      // udpate camera image directive
      $cordovaCamera.getPicture(options).then(function (imageURI) {
        $scope.cameraimage = imageURI;
      }, function (err) {
        alert('Failed because: ' + message);
      });
    };
})

.controller('directionCtrl', function($scope) {




}) //end directionCtrl



;

