var feedApp = angular.module('feedApp', ['ngResource', 'angularMoment', 'ngAnimate']);

feedApp.controller('FeedCtrl', ['$scope', '$resource', '$timeout', function($scope, $resource, $timeout) {
  $scope.feedEntries = $resource('/feed').query();

  io.socket.get('/feed/subscribe', function(data, jwr) {
    io.socket.on('new_entry', function(entry) {
      $timeout(function() {
        $scope.feedEntries.unshift(entry);
      });
    });
  });
}]);
