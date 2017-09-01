angular.module("app", [
    "ngRoute",
    "aside",
    "header",
    "index",
    "login"
])
    .config(["$routeProvider", function ($routeProvider) {
        $routeProvider
            .when('/', {
                template: '<ngl-aside></ngl-aside><ngl-header></ngl-header><ngl-index></ngl-index>'
            })
            .when('/index', {
                redirectTo: '/'
            })
            .when('/login', {
                template: "<ngl-login></ngl-login>"
            })
            .otherwise({
                templateUrl: 'src/html/404.html'
            })
    }]);