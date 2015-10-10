var todoApp = angular.module('todoApp', ['ngResource']);

todoApp.controller('TodoCtrl', function($scope, todoFactory) {

    $scope.items = todoFactory.query();

    $scope.remaining = function() {
        var count = 0;
        angular.forEach($scope.items, function(item) {
            count += item.checked ? 0 : 1;
        });
        return count;
    };

    $scope.newItemDescription = "";
	
	$scope.toggleItem = function(item) {

		todoFactory.save(item);
		$scope.items = todoFactory.query();
	}
	
	$scope.deleteItem = function(item){

		todoFactory.delete(item);
		$scope.items = todoFactory.query();
	}
	
    $scope.addItem = function() {
        if ($scope.newItemDescription.length > 0) {
            todoFactory.save({
                description: $scope.newItemDescription,
                checked: false
            })
			$scope.newItemDescription="";
            $scope.items = todoFactory.query();

        }
    };

});
