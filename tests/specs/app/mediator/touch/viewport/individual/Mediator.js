/*global describe:true, beforeEach:true, it:true, expect:true, Core:true*/
describe("Test Core.mediator.touch.viewport.individual.Mediator", function () {

    beforeEach(function () {
        Ext.syncRequire("Core.mediator.touch.viewport.individual.Mediator");
    });

    it("loads ok with Ext.syncRequire", function () {
        expect(Core.mediator.touch.viewport.individual.Mediator).not.toBe(undefined);
    });

});
