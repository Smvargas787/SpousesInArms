siaApp.config(function($locationProvider, $routeProvider){
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
  .when('/details', {
    templateUrl: 'templates/details.html',
    controller: 'DetailsController'
  });
});
