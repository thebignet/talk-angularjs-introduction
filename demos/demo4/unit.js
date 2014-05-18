'use strict';
describe('myDemo4', function(){
	beforeEach(module('myDemo4'));
	describe('controller', function(){
		var scope, ctrl;
		beforeEach(inject(function($rootScope, $controller) {
			scope = $rootScope.$new();
			ctrl = $controller('MyCtrl', {$scope: scope});
		}));
		it('should have 4 technos', function() {
			expect(scope.technos.length).toBe(4);
		});
		it('should have correct elements', function() {
			expect(scope.technos[0]).toBe('JavaScript');
			expect(scope.technos[1]).toBe('HTML');
			expect(scope.technos[2]).toBe('CSS');
			expect(scope.technos[3]).toBe('Java');
		});
	});
});