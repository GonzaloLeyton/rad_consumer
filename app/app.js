
var UsersApp = angular.module('UsersApp', ['ngResource']);

UsersApp.factory("User", function($resource) {
    return $resource("https://rad-gonzaloleyton-1.c9.io/api/v1/users/:id");
});

UsersApp.controller('UserController', function($scope, User) {
    
    this.getData = function(){
            User.get({}, function(data) {
            $scope.data = data.users;
        });    
    };
});
  

