/*global angular, console, $, alert, jQuery*/
/*jslint vars: true*/
/*jslint plusplus: true*/

var app = angular.module("myApp", ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when("/dashboard", {
			controller: "dashboardCtrl",
			templateUrl: "pages/dashboard.html"
		})
		.when("/movie_db", {
            controller: "movieDbCtrl",
			templateUrl: "pages/movie_db.html"
		})
		.when("/actor_db", {
			controller: "myCtrl",
			templateUrl: "pages/changepwd.html"
		})
        .when("/satistics", {
			controller: "satisticsCtrl",
			templateUrl: "pages/changepwd.html"
		});

});

app.controller("myCtrl", function ($scope, $http, $rootScope) {
    $rootScope.$on("$routeChangeSuccess", function(event, next, current) {

        console.log(current);
    });
});

app.controller("dashboardCtrl", function ($scope, $http) {

    $scope.queries = [];

    function getData() {

        $scope.queries.push("SELECT count(ACTORNO) FROM actor");
        $scope.queries.push("SELECT count(MOVIENO) FROM movie");


        for (var i = 0; i < $scope.queries.length; i++) {
            $http.post("pigeon-core/get-data.php", {'sql': $scope.queries[i]})
                .then(function(response) {

            })

        }

    }

    getData();

});

app.controller("movieDbCtrl", function ($scope, $http, $compile) {

});
