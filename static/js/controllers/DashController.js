siaApp.controller("DashController", ["$scope", "$firebaseArray", "$location", function($scope, $firebaseArray, $location) {

  var ref = new Firebase("https://spouesinarms.firebaseio.com/");

  $scope.messages = $firebaseArray(ref);
  console.log("in here")


}]);
