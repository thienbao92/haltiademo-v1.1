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

.controller('CameraCtrl', function ($scope, $cordovaCamera, $cordovaFile, PhotoAlbum) {
    $scope.photos = PhotoAlbum;

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
        onImageSuccess(imageURI);

        function onImageSuccess(fileURI) {
            createFileEntry(fileURI);
        }

        function createFileEntry(fileURI) {
            window.resolveLocalFileSystemURL(fileURI, copyFile, fail);
        }

        // 5
        function copyFile(fileEntry) {
            var name = fileEntry.fullPath.substr(fileEntry.fullPath.lastIndexOf('/') + 1);
            var newName = makeid() + name;

            window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function(fileSystem2) {
                fileEntry.copyTo(
                    fileSystem2,
                    newName,
                    onCopySuccess,
                    fail
                );
            },
            fail);
        }

        // 6
        function onCopySuccess(entry) {
            $scope.$apply(function () {
                PhotoAlbum.push({link: entry.nativeURL, id: PhotoAlbum.length + 1});
            });
        }

        function fail(error) {
            console.log("fail: " + error.code);
        }

        function makeid() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (var i=0; i < 5; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return text;
        }

      }, function (err) {
        console.log(err);
      });
    };
})

.controller('directionCtrl', function($scope) {




}) //end directionCtrl



;

