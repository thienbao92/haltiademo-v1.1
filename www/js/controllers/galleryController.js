angular.module('gallery.controller', [])

.controller('GalleryCtrl', function($scope, PhotoAlbum) {
  $scope.photos = PhotoAlbum.photos;
})

.controller('SlideShowCtrl', function($scope, PhotoAlbum, $stateParams) {
    $scope.photos = PhotoAlbum.photos;


    // initial image index
    $scope._Index = parseInt($stateParams.photoId) - 1;

    // if a current image is the same as requested image
    $scope.isActive = function (index) {
        return $scope._Index === index;
    };

    // show prev image
    $scope.showPrev = function () {
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
    };

    // show next image
    $scope.showNext = function () {
        $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
    };

});
