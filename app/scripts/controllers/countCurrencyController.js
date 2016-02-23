'use strict';

angular.module('kelloprojektiApp')
    .controller('CountCurrencyController', function ($scope, LocationService, AjaxFactory) {

        $scope.$watch(function () {
            return LocationService.currencyCode;
        }, function (newValue) {
            console.log(newValue);
            if (newValue === undefined) {
                return;
            }
            var request = AjaxFactory.getCurrency(newValue);
            request.then(function (response) {
                console.log(response.data);
                $scope.rates = response.data.rates;
                $scope.rateNames = Object.keys($scope.rates);
                
            }, function (error) {
                // tee virheellä jotain
                console.log(error.data);
            });
        });


    });