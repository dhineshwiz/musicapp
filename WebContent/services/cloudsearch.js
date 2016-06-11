angular.module('StarterApp').factory('cloudsearch', ['$resource', function ($resource) {
    return $resource('https://api.soundcloud.com/tracks');
}]);