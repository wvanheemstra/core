/*global describe:true, beforeEach:true, it:true, expect:true, Core:true*/
describe("Asset", function () {

	describe("Controller", function () {
		beforeEach(function () {
			Ext.syncRequire("Core.controller.asset.Controller");
		});
		it("loads ok with Ext.syncRequire", function () {
			expect(Core.controller.asset.Controller).not.toBe(undefined);
		});
	});
	
	describe("Event", function () {	
		beforeEach(function () {
			Ext.syncRequire("Core.event.asset.Event");
		});
		it("loads ok with Ext.syncRequire", function () {
			expect(Core.event.asset.Event).not.toBe(undefined);
		});
	});
	
	describe("Mediator", function () {
		describe("Touch", function () {
			describe("Viewport", function () {
				beforeEach(function () {
					Ext.syncRequire("Core.view.touch.viewport.asset.Mediator");
				});
				it("loads ok with Ext.syncRequire", function () {
					expect(Core.view.touch.viewport.asset.Mediator).not.toBe(undefined);
				});
			});
		});
	});
	
	describe("View", function () {
		describe("Touch", function () {
			describe("Viewport", function () {
				beforeEach(function () {
					Ext.syncRequire("Core.view.touch.viewport.asset.View");
				});
				it("loads ok with Ext.syncRequire", function () {
					expect(Core.view.touch.viewport.asset.View).not.toBe(undefined);
				});
			});
		});
	});
});
