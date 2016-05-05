var siaApp = angular.module("myApp", ["firebase"]);

siaApp.controller("MyController", ["$scope", "$firebaseArray",
  function($scope, $firebaseArray) {

    //CREATE A FIREBASE REFERENCE
  var ref = new Firebase("https://spousesinarms.firebaseio.com");
//create button with the code below in the function

// ref.authWithOAuthPopup("google", function(error, authData) {
//     if (error) {
//       console.log("Login Failed!", error);
//     } else {
//       console.log("Authenticated successfully with payload:", authData);
//     }
//   });

  // GET MESSAGES AS AN ARRAY
  $scope.messages = $firebaseArray(ref);

  //Add Client to Google Sign In Auth
  $scope.GoogleSignIn = function() {
    console.log("YO");
    ref.authWithOAuthPopup("google", function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
        }
      });


    //Listen For Return Key
    if (e.keyCode === 13 && $scope.msg) {
      //Allow Custom Or Anonymous User Names
      Var name = $scope.name || "anonymous";
      $scope.messages.$add({ from: name, body: $scope.msg });

      //Reset Message
      $scope.msg = " ";
    }
  }
}
]);
