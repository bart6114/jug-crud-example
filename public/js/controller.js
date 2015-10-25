var todoApp = angular.module('todoApp', ['ngResource']);

todoApp.controller('TodoCtrl', function($scope, $http, todoFactory) {
	
	$scope.init = function(){
		$scope.items = todoFactory.query();
		$scope.getPlot();
		$scope.newItemDescription = "";
	};
	
	
	$scope.getPlot = function(){
		$http.get('/items/plot').then(function(res){
			$scope.itemPlot = res.data;
		});
	};		
	

	$scope.remaining = function() {
		var count = 0;
		angular.forEach($scope.items, function(item) {
			count += item.checked ? 0 : 1;
		});
		return count;
	};
	
	
	$scope.toggleItem = function(item) {

		todoFactory.save(item);
		$scope.items = todoFactory.query();
		$scope.getPlot();
	};
	
	
	$scope.deleteItem = function(item){

		todoFactory.delete(item);
		$scope.items = todoFactory.query();
	};
	
	
	$scope.addItem = function() {
		if ($scope.newItemDescription.length > 0) {
			todoFactory.save({
				description: $scope.newItemDescription,
				checked: false
			});
			
			$scope.init();
		}
	};

});
