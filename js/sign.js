var app = angular.module('leadformApp', []);

app.controller('controller1', ['$scope', function($scope){
	$scope.data = [];
	$scope.submit_data = function(number, user){
		$scope.data[number] = angular.copy(user);
		$scope.sequence = $scope.data.length;
		$scope.user = {}
	};
	
	$scope.edit = function(number){
		$scope.user = angular.copy($scope.data[number]);
		$scope.sequence = number; 
		$scope.button_type = 'Modify';
	};
	
	$scope.delete = function(number){
		$scope.data.splice(number, 1);
		$scope.sequence = $scope.data.length;
		if (!$scope.sequence) $scope.showcase = false;
	}
	
	$scope.isUnchanged = function(number, user){
		var flag=true;
		if($scope.data[number] == undefined){
			return false
		}
		for(key in $scope.data[number]){
			if($scope.data[number][key] != user[key] && key != '$$hashKey'){
				flag=false;
				break;
			}
		}
		return flag
	};
}]);
