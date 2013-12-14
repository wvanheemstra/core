/*global describe:true, beforeEach:true, it:true, expect:true, Core:true*/
describe("Individual", function () {

	describe("Controller", function () {
		beforeEach(function () {
			Ext.syncRequire("Core.controller.individual.Controller");
		});
		it("loads ok with Ext.syncRequire", function () {
			expect(Core.controller.individual.Controller).not.toBe(undefined);
		});
	});
	
	describe("Event", function () {	
		beforeEach(function () {
			Ext.syncRequire("Core.event.individual.Event");
		});
		it("loads ok with Ext.syncRequire", function () {
			expect(Core.event.individual.Event).not.toBe(undefined);
		});
	});
	
	describe("Mediator", function () {
		describe("Touch", function () {
			describe("Viewport", function () {
				beforeEach(function () {
					Ext.syncRequire("Core.view.touch.viewport.individual.Mediator");
				});
				it("loads ok with Ext.syncRequire", function () {
					expect(Core.view.touch.viewport.individual.Mediator).not.toBe(undefined);
				});
			});
		});
	});
	
	describe("View", function () {
		describe("Touch", function () {
			describe("Viewport", function () {
				beforeEach(function () {
					Ext.syncRequire("Core.view.touch.viewport.individual.View");
				});
				it("loads ok with Ext.syncRequire", function () {
					expect(Core.view.touch.viewport.individual.View).not.toBe(undefined);
				});
			});
		});
	});
});
