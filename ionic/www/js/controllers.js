angular.module('appControllers', ['appServices']);

/*.controller('Page2Ctrl',function($scope, userService){
	userService.getUsers().then(function(users){
		$scope.users = users;
	});
});*/

.controller('Page2Ctrl', function($scope, test) {
    $scope.sessions = Session.query();
});