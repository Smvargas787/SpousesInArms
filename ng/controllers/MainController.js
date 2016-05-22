siaApp.controller("MainController", function($scope, $firebaseArray, $firebaseAuth, $location) {

    //CREATE A FIREBASE REFERENCE
  var ref = new Firebase("https://spouesinarms.firebaseio.com/");
  $scope.authObj = $firebaseAuth(ref);

  //Add Client to Google Sign In Auth
  $scope.GoogleSignIn = function() {
    $scope.authObj.$authWithOAuthPopup("google").then(function(authData) {
      console.log("Logged in as:", authData.uid);
      $location.path('/dashboard');
    }).catch(function(error) {
      console.error("Authentication failed:", error);
    });
  };


});
