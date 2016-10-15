/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app = angular.module("MyModule", ['ngRoute']);

app.controller("MainController", ['$scope', function ($scope) {
        var self = this;

        $scope.person = {
            id: persons.length + 1,
            name: '',
            age: ''
        };
        $scope.persons = persons;
        $scope.indexNumber = 0;


        $scope.addPerson = function () {
            if ($scope.person) {
                $scope.persons.push($scope.person);
            }
        };

    }]);

var persons = [
    {id: 1, name: "Jens", age: 18},
    {id: 2, name: "Peter", age: 23},
    {id: 3, name: "Hanne", age: 23}
];
app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/', {
            templateUrl: "main.html",
            controller: "MainController"

        }).when('/NewPerson', {
            templateUrl: "addPerson.html",
            controller: "MainController"
        }).when('/:id', {
            templateUrl: "details.html",
            controller: "MainController"
        });

    }]);

