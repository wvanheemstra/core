describe("Test Core.mediator.touch.viewport.asset.Mediator", function () {

    beforeEach(function () {
        Ext.syncRequire("Core.mediator.touch.viewport.asset.Mediator");
    });

    it("loads ok with Ext.syncRequire", function () {
        expect(Core.mediator.touch.viewport.asset.Mediator).not.toBe(undefined);
    });

});
