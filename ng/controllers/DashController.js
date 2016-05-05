siaApp.controller("DashController", function($scope, $firebaseArray, $location) {

  var ref = new Firebase("https://spouesinarms.firebaseio.com/");

  $scope.messages = $firebaseArray(ref);
  console.log("in here")


});
