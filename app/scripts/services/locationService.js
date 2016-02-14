    'use strict';

    angular
        .module('kelloprojektiApp')
        .factory('LocationService', function () {
        
        var locationData = {};
        locationData.setLocation = function (lat, lng) {
            this.latitude = lat;
            this.longitude = lng;
        };
        return locationData;
    });

