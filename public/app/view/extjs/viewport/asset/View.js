/**
 * The basic Viewport for the application.
 *
 * <p>
 * All views are purely layout and don't contain event handling,
 * application or business logic; this is all done in the view's corresponding mediator.
 * </p>
 */
Ext.define("Core.view.extjs.viewport.View", {
    extend: "Ext.container.Viewport",
    alias: "widget.viewportView",
    controller: "Core.mediator.extjs.viewport.asset.Mediator",
    width: 800,

    requires: [
		"Core.config.global.Config",
        "Core.view.extjs.login.View",
		"Core.view.extjs.asset.slide.View",
        "Core.view.extjs.asset.list.View",
        "Core.view.extjs.asset.detail.View",
        "Core.view.extjs.asset.tile.View",
        "Core.view.extjs.asset.modal.View"
    ],

    config: {
        width: 800,
        currentItem: null
    },

    layout: {
        align: "center",
        pack: "center",
        type: "vbox"
    },

    items: [
        {
            xtype: "loginView",
            itemId: "login",
            hidden: true
        },
        {
            xtype: "assetSlideView",
            itemId: "assetslide", 
            hidden: true
        },		
        {
            xtype: "assetListView",
            itemId: "assetlist",
            hidden: true
        },
        {
            xtype: "assetDetailView",
            itemId: "assetdetail",
            hidden: true
        },
        {
            xtype: "assetTileView",
            itemId: "maintile",
            hidden: true
        },
        {
            xtype: "assetModalView",
            itemId: "assetmodal",
            hidden: true
        }
    ],

    // TODO: BMR: Remove all logic from views
    setView: function(view) {
        console.log("Viewport.setView: " + view);
        //this.getView().items.getAt(1).show();
        for ( var i=0; i<this.items.length; i++)
        {
            var id = this.items.getAt(i).getItemId();
            if (id == view)
            {
                this.items.getAt(i).show();
            } else {
                this.items.getAt(i).hide();
            }
        }
    }

}, function() {
    this.getCurrentItem = Core.config.global.Config.getInitialView();// WAS "login";
    console.log("viewport create, currentitem = " + this.getCurrentItem);
});


