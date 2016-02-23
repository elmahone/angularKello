'use strict';

angular.module('kelloprojektiApp')
    .controller('TzController', function ($scope, LocationService, AjaxFactory) {
        var aika = 0;

        function kello() {
            aika =+ 1;
            $scope.timezone = $scope.timezone + aika;
            $scope.$apply();
        }
        var timer = null;
    

        function getLocation() {
            navigator.geolocation.getCurrentPosition(showPosition);
        }
        getLocation();

        function showPosition(position) {
            console.log(position);
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            LocationService.setLocation(lat, lng);
            

            var request = AjaxFactory.getCountryCode(lat, lng);

            request.then(function (response) {
                console.log(response.data);
                // -7200 koska tietokoneen kello on +2h
                $scope.timezone = response.data.timestamp - 7200;
                $scope.dst = response.data.dst;
                timer = window.setInterval(kello, 1000);


                LocationService.setCountry(response.data.countryCode);
            }, function (error) {
                // tee virheellä jotain
                console.log(error.data);
            });

        }




    });