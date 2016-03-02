'use strict';

angular.module('kelloprojektiApp')
    .controller('FiveDayWeatherController', function ($scope, LocationService, AjaxFactory) {

        var request = AjaxFactory.getFiveDayWeather();

        request.then(function (response) {
                console.log(response.data);

                $scope.list = response.data.list;

            },
            function (error) {
                // tee virheellä jotain
                console.log(error.data);
                var request = AjaxFactory.getFiveDayWeather();

                request.then(function (response) {
                        console.log(response.data);

                        $scope.list = response.data.list;

                    },
                    function (error) {
                        // tee virheellä jotain
                        console.log(error.data);

                    });
            });
    });