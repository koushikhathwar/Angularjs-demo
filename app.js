var app = angular.module("myApp", ["ngRoute", "ngStorage"])

app.config(function ($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "home.html",
            controller: "homeController"

        })
        .when("/people", {
            templateUrl: "people.html",
            controller: "peopleController"

        })
        .when("/people/:id", {
            templateUrl: "posts.html",
            controller: "postsController"

        })
        .otherwise({
            redirectTo: "home"
        });
});

app.controller('homeController', function ($scope, $sessionStorage) {
    $sessionStorage.$reset();
    console.log('welcome to home')

    $scope.error = false;

    $sessionStorage.user = JSON.stringify('koushik');

    if ($sessionStorage.user == ('koushik')){
        console.log('welcome back')
    }
    else 
    console.log($sessionStorage.name)

});



app.controller('peopleController', function ($scope, $http, $sessionStorage) {

    console.log('welcome to people')

    $scope.loading = true;

    $scope.error = false;


    $http({

        method: 'GET',

        url: 'https://jsonplaceholder.typicode.com/users'

    }).then(function successCallback(response) {

        $scope.users = response.data;


    }, function error(response) {
        alert("Error. Try Again!");

    });


});

app.controller('postsController', function ($scope, $http,  $routeParams) {

    console.log('welcome to Posts')
    var currentId = $routeParams.id;
    console.log(currentId)
    $http.get("https://jsonplaceholder.typicode.com/posts?userId=" + currentId)
    .then(function (response) {
        $scope.myPosts = response.data;
      });
});

app.controller('dropdownController', function ($scope, $http,  $routeParams, $filter) {

    console.log('welcome to Posts')
    var currentId = $routeParams.id;
    console.log(currentId)
    $http.get("https://jsonplaceholder.typicode.com/posts")
    $scope.getdetails = function () {
        if ($scope.userselected.userid == "2")
        $scope.result = true;
        else
        $scope.result = false;
        }
        
        .then(function getdetails(response) {
            $scope.getdetails = response.data;
          });

});

