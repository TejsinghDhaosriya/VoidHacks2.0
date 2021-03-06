// Provide path of the application 
angular.module('angappRoutes', []).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
        .when('/hero', {
            templateUrl: 'views/hero.html',
            controller: 'HeroController'
        })
        .when('/vh-admin', {
            templateUrl: 'views/admin-form.html',
            controller: 'AdminFormController'
        })
        .when('/admin', {
            templateUrl: 'views/admin.html',
            controller: 'AdminController'
        })
    $locationProvider.html5Mode(true);
}]);