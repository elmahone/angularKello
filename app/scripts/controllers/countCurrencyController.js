'use strict';

angular.module('kelloprojektiApp')
    .controller('CountCurrencyController', function ($scope, LocationService, AjaxFactory) {
        $scope.piilota = true;
//        $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
//            //you also get the actual event object
//            //do stuff, execute functions -- whatever...
//            console.log(ngRepeatFinishedEvent);
//            //            $scope.valinta = angular.element('option')[1].innerHTML;
//            //            $scope.kurssi = angular.element('option')[1].value;
//            //            angular.element('option')[0].remove();
//            console.log(angular.element('option')[1].innerHTML);
//        });
        $scope.vaihdaKurssi = function (kurssi) {
            console.log(kurssi);
            $scope.valinta = angular.element('option:selected').html();
            $scope.piilota = false;

        };

        function valuutta() {
            $scope.currency = LocationService.currencyCode;
        }
        $scope.$watch(function () {
            return LocationService.currencyCode;
        }, function (newValue) {
            if (newValue === undefined) {
                return;
            }
            var request = AjaxFactory.getCurrency(newValue);
            request.then(function (response) {
                $scope.rates = response.data.rates;
                $scope.updated = response.data.date;

            }, function (error) {
                // tee virheellä jotain
                console.log(error.data);
                LocationService.setCurrency('EUR');
                $('.currency-slide').each(function () {
                    alert('Could not find local currency. Changing to EUR');
                });
                valuutta();


            });

        });
    });