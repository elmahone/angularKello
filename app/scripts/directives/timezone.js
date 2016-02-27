'use strict';

angular
    .module('kelloprojektiApp')
    .directive('timezone', function(){
    
    return {
        restrict:'E',
        templateUrl:'views/timezone.html'
    };
});