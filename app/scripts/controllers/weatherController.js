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
                
            }
            else if(weather==='few clouds'){
                
                 $('.time-slide').css('background-image', 'url(images/few-clouds.jpg)');
            }
            else if(weather==='scattered clouds'){
                
                $('.time-slide').css('background-image', 'url(images/scattered-clouds.jpg)');
            }
            else if(weather==='broken clouds'){
                
                $('.time-slide').css('background-image', 'url(images/broken-clouds.jpg)');
            }
            else if(weather==='shower rain'){
                
                $('.time-slide').css('background-image', 'url(images/shower-rain.jpg)');
            }
            else if(weather==='rain'){
                
                $('.time-slide').css('background-image', 'url(images/rain.jpg)');
            }
            else if(weather==='thunderstorm'){
                
                $('.time-slide').css('background-image', 'url(images/thunderstorm.jpg)');
            }
            else if(weather==='snow'){
                
                $('.time-slide').css('background-image', 'url(images/snow.jpg)');
            }
            else if(weather==='mist'){
                
                $('.time-slide').css('background-image', 'url(images/mist.jpg)');
            }
            else{
                console.log('404');
            }
            
            
        }, function (error) {
            // tee virheellä jotain
            console.log(error.data);
        });
    });