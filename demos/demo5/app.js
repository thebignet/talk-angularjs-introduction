var myApp = angular.module('myDemo5', []).filter('truncate', function () {
    return function (text,length) {
    	return (text.length<=length)?text:(String(text).substring(0,length)+'...');
    };
});
myApp.controller('MyCtrl', function MyCtrl($scope) {
	$scope.blah = 'blah blah blah blah blah blah blah blah blah';
});
