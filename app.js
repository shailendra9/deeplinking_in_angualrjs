var sampleApp = angular.module('sampleApp', []);

sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/ShowOrder/:carId', {
	templateUrl: 'templates/show_order.html',
	controller: 'ShowOrderController'
      });
}]);


sampleApp.controller('ShowOrderController', function($scope, $http, $routeParams) {

  $http.get('data.json').
    success(function(data){
      $scope.cars = data;
     $scope.car_id = $routeParams.carId;
    });
	 
});
