'use strict';

angular.module('kelloprojektiApp')
    .controller('TzController', function ($scope, $interval, LocationService, AjaxFactory) {


        function getLocation() {
            navigator.geolocation.getCurrentPosition(showPosition);
        }
        getLocation();

        function showPosition(position) {
            console.log(position);
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            LocationService.setLocation(lat, lng);
            var n = Date.now();
           $scope.date = n;
            
            var request = AjaxFactory.getCountryCode(lat, lng);

            request.then(function (response) {
                console.log(response.data);
                
                var timeUpdate = function () {
                    $scope.timezone = response.data;
                };
                
                LocationService.setCountry(response.data.countryCode);
                $interval(timeUpdate, 1000);
            }, function (error) {
                // tee virheellä jotain
                console.log(error.data);
            });

        }




    });