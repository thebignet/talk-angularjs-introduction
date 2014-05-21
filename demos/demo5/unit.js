'use strict';
describe('myDemo5', function(){
	beforeEach(module('myDemo5'));
	describe('controller', function(){
		var scope, ctrl, filter, myModule;
		beforeEach(inject(function($rootScope, $controller, $filter) {
			scope = $rootScope.$new();
			ctrl = $controller('MyCtrl', {$scope: scope});
			myModule = angular.module('myDemo5');
			filter = $filter('truncate');
		}));
		it('should have filter dependency', function() {
			expect(myModule.requires.length).toBe(0);
 		});
		it('should have truncate filter', function() {
			expect(filter).not.toBeNull();
 		});
		it('should truncate correctly', function() {
			expect(filter('123456789',5)).toBe('12345...');
			expect(filter('123456789',9)).toBe('123456789');
 		});
	});
});