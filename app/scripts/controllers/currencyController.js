'use strict';

angular.module('kelloprojektiApp')
    .controller('CurrencyController', function ($scope, LocationService, AjaxFactory) {

        $scope.$watch(function () {
            return LocationService.countryCode;
        }, function (newValue) {
            console.log(newValue);
            if (newValue === undefined) {
                return;
            }
            var request = AjaxFactory.getCountryInfo(newValue);
            request.then(function (response) {
                console.log(response.data);
                $scope.currency = response.data.currencies[0];
            }, function (error) {
                // tee virheellä jotain
                console.log(error.data);
            });
        });


    });