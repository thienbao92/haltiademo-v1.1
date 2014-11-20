angular.module('starter.controllers', [])



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
});

