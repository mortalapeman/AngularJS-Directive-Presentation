describe('The login in page', function() {
    var $scope, $http, $location, AlertService, success;
    beforeEach(module('app'));
    beforeEach(inject(function($rootScope, $injector) {
        $scope = $rootScope.$new();
        $http = $injector.get('$http');
        $location = $injector.get('$location');
        AlertService = $injector.get('AlertService');

        spyOn($http, 'post').andReturn({
            then: function(s) {
                success = s;
            }
        });
        spyOn($location, 'path');
        spyOn(AlertService, 'add');
    }));

    describe('after loading', function() {
        beforeEach(inject(function($controller) {
            $controller('LoginController', {
                $scope: $scope,
                $http: $http,
                $location: $location,
                AlertService: AlertService
            });
        }));

        it('should setup the submit button', function() {
            expect($scope.submit).toBeDefined();
        });

        describe('then pressing the submit', function() {
            beforeEach(function() {
                $scope.userName = 'Bob';
                $scope.password = 'password';
                $scope.submit();
            });

            it('should submit the login data to the server', function() {
                expect($http.post).toHaveBeenCalledWith('/account/login', {
                    userName: 'Bob',
                    password: 'password'
                });
            });

            it('should redirect to the home page if authentication succeeds', function() {
                success({data: { isAuthenticated: true} });
                expect($location.path).toHaveBeenCalledWith('/home');
            });

            it('should display an alert if login failed', function() {
                success({data: {isAuthenticated: false }});
                expect(AlertService.add).toHaveBeenCalled();
            });
        });
    });
});






