describe("Test Core.view.extjs.viewport.asset.View", function () {

    beforeEach(function () {
        Ext.syncRequire("Core.view.extjs.viewport.asset.View");
    });

    it("loads ok with Ext.syncRequire", function () {
        expect(Core.view.extjs.viewport.asset.View).not.toBe(undefined);
    });

});
