var app = angular.module('catsList' );

app.component('cats', {
	templateUrl: '/templates/adoptCat.html'
});
app.controller('catsCtrl', function ($scope, $http,$window){
 
var getCats = function() {
	//get the cats from server side
	$http.get('/cats')
  .then(function (response) {
    // handle success
    console.log(response)
    $scope.cats = response.data
    console.log('bsbs',$scope.cats)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });


};
getCats();//fetch cats on call

$scope.addCats=function() {
  //add the cats from client side and send them to server side to be saved inside the database
$http.post('/cats', {
    catName: $scope.catName,
    ownerEmail: $scope.ownerEmail,
    imageUrl : $scope.imageUrl,
    adoptionMessage : $scope.adoptionMessage
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
	

}

});
