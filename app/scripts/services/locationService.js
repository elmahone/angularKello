    'use strict';

    angular
        .module('kelloprojektiApp')
        .factory('LocationService', function () {

            var locationData = {};
            locationData.setLocation = function (lat, lng) {
                this.latitude = lat;
                this.longitude = lng;
            };
            locationData.setCountry = function (countryCode) {
                this.countryCode = countryCode;
            };
            locationData.setCurrency = function (currencyCode) {
                this.currencyCode = currencyCode;
            };
            locationData.setOffset = function (offset) {
                this.offset = offset;
            };

            return locationData;

        });