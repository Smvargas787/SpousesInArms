siaApp.controller('DashController', ["$location", "$scope", "$firebaseObject", "$firebaseAuth", function($location, $scope, $firebaseObject, $firebaseAuth){
  var spouseData = {};

  var ref = new Firebase("https://spouesinarms.firebaseio.com/");
  $scope.authObj = $firebaseAuth(ref);

  //Check for user logging in
  $scope.authObj.$onAuth(function(authData) {
    if (authData) {
      //id user is logged in you get the var authData
      console.log("Logged in as:", authData.uid);
      var spouseRef = new Firebase("https://spouesinarms.firebaseio.com/users/" + authData.uid );
      spouseData = $firebaseObject(spouseRef);

      console.log("Firebase data ", spouseData);
    } else {
      // if the user isn't logged in it kickes them to the route in path
      $location.path('/');
      console.log("Logged out");
    }
  });


  $scope.addSpouse = function(){
    // setting var spouse to $scope.spouse (the form data)
    spouseData.spouse = $scope.spouse;
    // var unixtime = Date.parse($scope.spouse.dob).getTime()/1000;
    // spouseData.spouse.dob = unixtime;
    console.log("date ", spouseData.spouse.dob);

    // var spouse is the $firebaseObject, so $save on that object once you change it
    spouseData.$save().then(function(ref) {
      ref.key() === spouseData.$id; // true
      console.log("Added spouse to Firebase: ",  ref.key());
      $location.path('/details');
    }, function(error) {
      console.log("Error:", error);
    });
  };
}]);
