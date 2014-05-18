'use strict';
describe('myDemo2', function(){
	beforeEach(module('myDemo2'));
	describe('controller', function(){
		var scope, ctrl;
		beforeEach(inject(function($rootScope, $controller) {
			scope = $rootScope.$new();
			ctrl = $controller('MyCtrl', {$scope: scope});
		}));
		it('should have a controller', function() {
			expect(scope.reponse).toBe(42);
		});
	});
});