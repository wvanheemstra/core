/**
 * A ListView class
 * @author Willem van Heemstra
 */
Ext.define('Core.view.touch.component.ListView', {
    override: 'Ext.dataview.List',
    alias: 'widget.listview',
    onTranslate: function(x, y) {
        var me = this,
            pinnedHeader = me.pinnedHeader,
            store = me.getStore(),
            storeCount = store && store.getCount(),
            grouped = me.getGrouped(),
            infinite = me.getInfinite();

        if (!storeCount) {
            me.showEmptyText();
            me.showEmptyScrollDock();

            pinnedHeader.$position = -10000;
            pinnedHeader.translate(0, -10000);
        }
        else if (infinite && me.itemsCount) {
            me.handleItemUpdates(y);
            me.handleItemHeights();
            me.handleItemTransforms();
        }

        if (me.getPinHeaders() && grouped && me.groups && me.groups.length) {
            me.handlePinnedHeader(y);
        }
    }
});