angular.module('myDemo5Filters', []).filter('truncate', function () {
    return function (text,length) {
    	return (text.length<=length)?text:(String(text).substring(0,length)+'...');
    };
});
var myApp = angular.module('myDemo5', ['myDemo5Filters']);
myApp.controller('MyCtrl', function MyCtrl($scope) {
	$scope.blah = 'blah blah blah blah blah blah blah blah blah';
});
