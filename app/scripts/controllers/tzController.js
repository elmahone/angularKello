'use strict';

angular.module('kelloprojektiApp')
    .controller('TzController', function ($scope,$interval, LocationService, AjaxFactory) {


        function getLocation() {
            navigator.geolocation.getCurrentPosition(showPosition);
        }
        getLocation();

        function showPosition(position) {
            console.log(position);
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
//            var lat = -35.3080;
//            var lng = 149.1245;
            LocationService.setLocation(lat, lng);

            $scope.lat = LocationService.latitude;
            $scope.lng = LocationService.longitude;
            var request = AjaxFactory.getTime(lat, lng);

            request.then(function (response) {
                console.log(response.data);
                $scope.timezone = response.data;
                LocationService.setCountry(response.data.countryCode);
            }, function (error) {
                // tee virheellä jotain
                console.log(error.data);
            });
        }
    



    });