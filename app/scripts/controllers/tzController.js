'use strict';

angular.module('kelloprojektiApp')
    .controller('TzController', function ($scope, LocationService, AjaxFactory) {
        var aika = 0;
        var goOn = false;
        function kello() {
            aika = +1;
            $scope.timezone = $scope.timezone + aika;
            $scope.$apply();
        }
        var timer = null;





        function getLocation() {
            navigator.geolocation.getCurrentPosition(showPosition);
        }
        getLocation();

        function showPosition(position) {
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;


            //NIGERIA TULEE ERROR VALUUTAN kANSSA
            //var lat = 8.9319365;
            //var lng = 8.4382574;

            //MOSKOVA
            //var lat = 55.7485171;
            //var lng = 37.07212;

            //Sydney
            //var lat = -33.7960362;
            //var lng = 150.6422538;

            LocationService.setLocation(lat, lng);



            var request = AjaxFactory.getCountryCode(lat, lng);

            request.then(function (response) {
                console.log(response.data);
                // -7200 koska tietokoneen kello on +2h
                $scope.timezone = response.data.timestamp - 7200;
                $scope.dst = response.data.dst;
                $scope.country = response.data.countryCode;
                timer = window.setInterval(kello, 1000);
                var offset = Number(response.data.gmtOffset);

                LocationService.setCountry(response.data.countryCode);
                LocationService.setOffset(offset);
                goOn = true;
                LocationService.goOn(goOn);
            }, function (error) {
                // tee virheellä jotain
                console.log(error.data);
            });

        }




    });