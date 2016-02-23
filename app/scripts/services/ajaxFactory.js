'use strict';

angular
    .module('kelloprojektiApp')
    .factory('AjaxFactory', function ($http) {
        var ajaxFunctions = {};


        ajaxFunctions.getCountryCode = function (lat, lng) {
            return $http.get('http://api.timezonedb.com/?lat=' + lat + '&lng=' + lng + '&format=json&key=AH5ELORHDNTT');
        };

        ajaxFunctions.getCountryInfo = function (code) {
            console.log(code);
            return $http.get('https://restcountries.eu/rest/v1/alpha/' + code);
        };

        ajaxFunctions.getCurrency = function (currency) {
            return $http.get('http://api.fixer.io/latest?base=' + currency);
        };
        return ajaxFunctions;
    });