angular.module('app', [])

.service('AlertService', function() {
    this.add = function(msg) {
        // Do something with message
    }
})

.controller('LoginController', function($scope, $http, $location, AlertService) {
    $scope.submit = function() {
        $http.post('/account/login', {userName: $scope.userName, password: $scope.password})
        .then(function(resp) {
            if (resp.data.isAuthenticated) {
                $location.path('/home');
            } else {
               AlertService.add('Failed to login'); 
            }
        });
    };
});
