/**
 * A TileView class
 * @author Willem van Heemstra
 */
Ext.define('Core.view.touch.component.TileView', {
    // Extend dataview
    extend: 'Ext.dataview.DataView',
    alias: "widget.tileview",
    config: {
        // Give it a custom baseCls so we can target this view and its items
        baseCls: 'core-tile-view',

        // Give it a simple itemTpl which displays the field name within the item
        itemTpl: '{name}'
    }
});