/*global angular, console, $, alert, jQuery*/
/*jslint vars: true*/
/*jslint plusplus: true*/

var app = angular.module("myApp", ['ngRoute', 'pigeon-table', 'pigeon-chart']);

app.config(function ($routeProvider) {
	$routeProvider
		.when("/dashboard", {
			controller: "dashboardCtrl",
			templateUrl: "pages/dashboard.html"
		})
		.when("/movie_db", {
            controller: "myCtrl",
			templateUrl: "pages/movie_db.html"
		})
		.when("/actor_db", {
			controller: "myCtrl",
			templateUrl: "pages/actor_db.html"
		})
        .when("/satistics", {
			controller: "myCtrl",
			templateUrl: "pages/statistics.html"
		});

});

app.controller("myCtrl", function ($scope, $http, $rootScope) {

});

app.controller("dashboardCtrl", function ($scope, $http) {

    $scope.queries = [];

    function getData() {


        $http.post("pigeon-core/get-data.php", {'sql': "SELECT GENDER as Gender, count(GENDER) as 'Number of Actor' FROM actor GROUP BY GENDER"})
            .then(function(response) {
                $scope.actor = response.data.data;
        });

        $http.post("pigeon-core/get-data.php", {'sql': "SELECT RATINGCODE as 'Rating Code', count(RATINGCODE) as 'Number of Movie' FROM movie GROUP BY RATINGCODE"})
            .then(function(response) {
                $scope.movie = response.data.data;
        });

    }

    getData();

});
