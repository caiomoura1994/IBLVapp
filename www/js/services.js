angular.module('starter.services', ['ngResource'])

.factory('Session', function ($resource) {
    return $resource('http://http://localhost:8100/sessions/:sessionId');
});	