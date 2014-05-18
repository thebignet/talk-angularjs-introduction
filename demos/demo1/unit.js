'use strict';
describe('myDemo1', function(){
	var curModule;
	beforeEach(curModule = module('myDemo1'));
	describe('myDemo1 module', function(){
		it('should have a module', function() {
			expect(curModule).not.toBeNull();
		});
	});
	describe('Controller', function(){
		var scope, ctrl;
		beforeEach(inject(function($rootScope, $controller) {
			scope = $rootScope.$new();
			ctrl = $controller('MyCtrl', {$scope: scope});
		}));
		it('should have a controller', function() {
			expect(ctrl).not.toBeNull();
		});
	});
});