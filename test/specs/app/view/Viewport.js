describe("Test Core.view.Viewport", function () {

    beforeEach(function () {
        Ext.syncRequire("Core.view.Viewport");
    });

    it("loads ok with Ext.syncRequire", function () {
        expect(Core.view.Viewport).not.toBe(undefined);
    });

});
