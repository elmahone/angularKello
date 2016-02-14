'use strict';

angular
    .module('kelloprojektiApp')
    .factory('AjaxFactory', function ($http, LocationService) {
    console.log(LocationService.latitude);
        var ajaxFunctions = {};

    
        ajaxFunctions.getTime = function () {
            return $http.get('http://api.timezonedb.com/?lat=' + LocationService.latitude + '&lng=' + LocationService.longitude + '&format=json&key=AH5ELORHDNTT');
        };
    return ajaxFunctions;
    });