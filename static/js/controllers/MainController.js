siaApp.controller("MainController", ["$scope", "$firebaseArray", function($scope, $firebaseArray) {

    //CREATE A FIREBASE REFERENCE
  var ref = new Firebase("https://spouesinarms.firebaseio.com/");


  // GET MESSAGES AS AN ARRAY
  $scope.messages = $firebaseArray(ref);

  //Add Client to Google Sign In Auth
  $scope.GoogleSignIn = function() {
    ref.authWithOAuthPopup("google", function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
        }
      });
  }


}]);
