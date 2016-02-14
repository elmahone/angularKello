'use strict';

angular.module('kelloprojektiApp')
    .controller('TzController', function ($scope, LocationService, AjaxFactory) {
        var x = document.getElementById('demo');

        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                x.innerHTML = 'Geolocation is not supported by this browser.';
            }
        }
        getLocation();

        function showPosition(position) {
console.log(position);
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            LocationService.setLocation(lat, lng);
            console.log(LocationService);

            $scope.lat = LocationService.latitude;
            $scope.lng = LocationService.longitude;}
        var request = AjaxFactory.getTime();

        request.then(function (response) {
            console.log(response.data);
            $scope.timezone = response.data.zoneName;
        }, function (error) {
            // tee virheellä jotain
            console.log(error.data);
        });


    });