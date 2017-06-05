console.log('app.js');

var app = angular.module('MyApp', []);

app.controller('mainController', ['$http', function($http){
    this.selected_partial='index';
}])
