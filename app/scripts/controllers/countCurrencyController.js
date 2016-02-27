'use strict';

angular.module('kelloprojektiApp')
    .controller('CountCurrencyController', function ($scope, LocationService, AjaxFactory) {
    
        function valuutta() {
            $scope.currency = LocationService.currencyCode;
        }
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


            }, function (error) {
                // tee virheellä jotain
                console.log(error.data);
                LocationService.setCurrency('EUR');
                $('.currency-slide').each(function () {
                    alert("Could not find local currency. Changing to EUR");
                });
                valuutta();
                console.log(LocationService);


            });



        });
    });