/**
* menu.controller Module
*
* Description
*/
angular.module('menu.controller', [])

.controller('menuCtrl', ['$scope', function($scope){
	
	$scope.init = function (){

    $.simpleWeather({
      location: 'Helsinki, FI',
      woeid: '',
      unit: 'c',
      success: function(weather) {
        html = '<h2><i class="icon-'+weather.code+'"></i><ul>'+weather.temp+'&deg;'+weather.units.temp+' </ul>'+weather.city+'</h2>';

        $("#weather").html(html);
      },
      error: function(error) {
        $("#weather").html('<p>'+error+'</p>');
      }

    });
  };
}]);