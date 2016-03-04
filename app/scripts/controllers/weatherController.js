'use strict';

angular.module('kelloprojektiApp')
    .controller('WeatherController', function ($scope, LocationService, AjaxFactory) {

        var request = AjaxFactory.getWeather();

        request.then(function (response) {
            console.log(response.data);
            $scope.temp = response.data.main.temp;
            $scope.city = response.data.name;
            var weather = response.data.weather[0].description;
            $scope.icon = response.data.weather[0].icon;
            
            if(weather==='clear sky'){
                $('.time-slide').css('background-image', 'url(images/clear-sky.jpg)');
                $('.time-slide').css('background-size', 'cover');
              
                
            }
            else if(weather==='few clouds'){
                
                 $('.time-slide').css('background-image', 'url(images/few-clouds.jpg)');
                $('.time-slide').css('background-size', 'cover');
            }
            else if(weather==='scattered clouds'){
                
                $('.time-slide').css('background-image', 'url(images/scattered-clouds.jpg)');
                $('.time-slide').css('background-size', 'cover');
            }
            else if(weather==='broken clouds'){
                
                $('.time-slide').css('background-image', 'url(images/broken-clouds.jpg)');
                $('.time-slide').css('background-size', 'cover');
            }
            else if(weather==='overcast clouds'){
                
                $('.time-slide').css('background-image', 'url(images/broken-clouds.jpg)');
                $('.time-slide').css('background-size', 'cover');
            }
            else if(weather==='shower rain'){
                
                $('.time-slide').css('background-image', 'url(images/shower-rain.jpg)');
                $('.time-slide').css('background-size', 'cover');
            }
            else if(weather==='rain'){
                
                $('.time-slide').css('background-image', 'url(images/rain.jpg)');
                $('.time-slide').css('background-size', 'cover');
            }
            else if(weather==='thunderstorm'){
                
                $('.time-slide').css('background-image', 'url(images/thunderstorm.jpg)');
                $('.time-slide').css('background-size', 'cover');
            }
            else if(weather==='snow'){
                
                $('.time-slide').css('background-image', 'url(images/snow.jpg)');
                $('.time-slide').css('background-size', 'cover');
            }
            else if(weather==='mist'){
                
                $('.time-slide').css('background-image', 'url(images/mist.jpg)');
                $('.time-slide').css('background-size', 'cover');
            }
            else{
                console.log('404');
                console.log(weather);
            }
            
            
        }, function (error) {
            // tee virheellä jotain
            console.log(error.data);
        });
    });