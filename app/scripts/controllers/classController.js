'use strict';

angular.module('kelloprojektiApp')
    .controller('ClassController', function () {
        this.class = 1;

        this.setClass = function (newValue) {
            this.class = newValue;
        };

        this.isSet = function (className) {
            return this.class === className;
        };
    });