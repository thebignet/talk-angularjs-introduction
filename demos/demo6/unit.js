'use strict';
describe('myDemo6', function(){
	beforeEach(module('myDemo6'));
	describe('controller', function(){
		var scope, ctrl;
		beforeEach(inject(function($rootScope, $controller) {
			scope = $rootScope.$new();
			ctrl = $controller('MyCtrl', {$scope: scope});
		}));
		it('should have a default', function() {
			expect(scope.nom).toBe('le monde');
 		});

	});
});