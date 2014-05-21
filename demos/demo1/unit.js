'use strict';
describe('myDemo1', function(){
	var curModule;
	beforeEach(curModule = module('myDemo1'));
	describe('myDemo1 module', function(){
		it('should have a module', function() {
			expect(curModule).not.toBeNull();
		});
	});
});