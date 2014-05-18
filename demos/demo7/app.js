var myApp = angular.module('myDemo7', ['ngResource']);
myApp.factory('AngularJsIssues', function($resource){
	return $resource('https://api.github.com/repos/angular/angular.js/issues');
});
myApp.controller('MyCtrl', function MyCtrl($scope,AngularJsIssues) {
	$scope.issues = AngularJsIssues.query();
});
