'use strict';

angular
    .module('kelloprojektiApp')
    .directive('currency', function(){
    
    return {
        restrict:'E',
        templateUrl:'views/currency.html'
    };
});