siaApp.controller('DetailsController', function($scope, $firebaseObject, $firebaseAuth){
  var ref = new Firebase("https://spouesinarms.firebaseio.com/");
  $scope.authObj = $firebaseAuth(ref);

  //Check for user logging in
  $scope.authObj.$onAuth(function(authData) {
    if (authData) {
      //id user is logged in you get the var authData
      console.log("Logged in as:", authData.uid);
      var spouseRef = new Firebase("https://spouesinarms.firebaseio.com/users/" + authData.uid + "/spouse");
      spouseData = $firebaseObject(spouseRef);
      $scope.spouse = spouseData;
      console.log("Firebase data ", $scope.spouse);
    } else {
      // if the user isn't logged in it kickes them to the route in path
      $location.path('/');
      console.log("Logged out");
    }
  });
});
