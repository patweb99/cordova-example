angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('ComposeCtrl', function($scope, Friends, Camera) {

  $scope.friends = Friends.all();
  $scope.getPhoto = function() {
    console.log('Getting camera');
    Camera.getPicture().then(function(imageURI) {
      console.log(imageURI);
      $scope.lastPhoto = imageURI;
    }, function(err) {
      console.err(err);
    }, {
      quality: 75,
      targetWidth: 320,
      targetHeight: 320,
      saveToPhotoAlbum: false
    });
    /*
    navigator.camera.getPicture(function(imageURI) {
      console.log(imageURI);
    }, function(err) {
    }, { 
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL
    });
    */
  }

})

.controller('PicturesCtrl', function($scope) {
})

.controller('VideosCtrl', function($scope) {
})

.controller('RemindersCtrl', function($scope) {
});