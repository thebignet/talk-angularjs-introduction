'use strict';
describe('myDemo3', function(){
	beforeEach(module('myDemo3'));
	describe('controller', function(){
		var scope, ctrl;
		beforeEach(inject(function($rootScope, $controller) {
			scope = $rootScope.$new();
			ctrl = $controller('MyCtrl', {$scope: scope});
		}));
		it('should have 8 elements', function() {
			expect(scope.elems.length).toBe(8);
		});
		it('should have correct elements', function() {
			expect(scope.elems[0]).toBe(0);
			expect(scope.elems[1]).toBe(1);
			expect(scope.elems[2]).toBe(1);
			expect(scope.elems[3]).toBe(2);
			expect(scope.elems[4]).toBe(3);
			expect(scope.elems[5]).toBe(5);
			expect(scope.elems[6]).toBe(8);
			expect(scope.elems[7]).toBe(13);
		});
	});
});