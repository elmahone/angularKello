'use strict';

angular
    .module('kelloprojektiApp')
    .directive('appCarousel', function () {

        return {
            restrict: 'E',
            templateUrl: 'views/appCarousel.html',
            controller: 'ClassController',
            controllerAs: 'classCtrl'
        };
    });