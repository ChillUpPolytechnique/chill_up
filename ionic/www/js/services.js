angular.module('appServices', ['ngResource']);

/*.factory('userService', function($http) {
	return {
		getUsers: function(){
			return $http.get("https://randomuser.me/api/?results=10").then(function(response){
				return response.data.results;
			});
		}
	}
})
*/

.factory('test', function ($resource) {
    return $resource('https://randomuser.me/api/?results=10');
});