siaApp.controller('DetailsController', ["$scope", "$firebaseObject", "$firebaseAuth", "$location", function($scope, $firebaseObject, $firebaseAuth, $location){
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

  //Deleting Registered Spouse
  $scope.removeSpouse = function() {
    spouseData.$remove().then(function(ref) {
      // data has been deleted locally and in the database
      console.log("Deleted spouse from Firebase: ",  ref.key());
      $location.path('/dashboard');
    }, function(error) {
      console.log("Error:", error);
    });
  };

  //Updating Spouse
  $scope.editSpouse = function(){
    spouseData.$save().then(function(ref) {
      ref.key() === spouseData.$id; // true
      console.log("Updated spouse to Firebase: ",  ref.key());
      $location.path('/dashboard');
    }, function(error) {
      console.log("Error:", error);
    });
  };
}]);
