
angular.module('samplerepo', [
  'ngRoute',
  'samplerepo.todo'
])
.config(function ($routeProvider) {
  'use strict';
  $routeProvider
    .when('/todo', {
      controller: 'TodoCtrl',
      templateUrl: '/samplerepo/todo/todo.html'
    })
    .otherwise({
      redirectTo: '/todo'
    });
});
