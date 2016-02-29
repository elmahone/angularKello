'use strict';

angular.module('kelloprojektiApp')
    .directive('onFinishRender', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit('ngRepeatFinished', {e: element});
                });
            }
        }
    };
});