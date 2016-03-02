'use strict';

angular
    .module('kelloprojektiApp')
    .directive('weather', function(){
    
    return {
        restrict:'E',
        templateUrl:'views/weather.html'
    };
});