siaApp.config(["$locationProvider", "$routeProvider", function($locationProvider, $routeProvider){
  $locationProvider.html5Mode(true);
  $routeProvider
  .when('/', {
    templateUrl: 'templates/home.html',
    controller: 'MainController'
  })
  .when('/dashboard', {
    templateUrl: 'templates/dashboard.html',
    controller: 'DashController'
  })
}])
