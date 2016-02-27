'use strict';

angular
    .module('kelloprojektiApp')
    .factory('AjaxFactory', function ($http, LocationService) {
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
        ajaxFunctions.getWeather = function () {
            return $http.get('http://api.openweathermap.org/data/2.5/weather?lat=' + LocationService.latitude + '&lon=' + LocationService.longitude + '&units=metric&APPID=96d06d9fc0fc3b685624810b34922966');
        };
        return ajaxFunctions;
    });