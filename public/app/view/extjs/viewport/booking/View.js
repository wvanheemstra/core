/**
 * The basic Viewport for the application.
 *
 * <p>
 * All views are purely layout and don't contain event handling,
 * application or business logic; this is all done in the view's corresponding mediator.
 * </p>
 */
Ext.define("Core.view.extjs.viewport.booking.View", {
    extend: "Ext.container.Viewport",
    alias: "widget.viewportView",
    controller: "Core.mediator.extjs.viewport.Mediator",
    width: 800,

    requires: [
		"Core.config.global.Config",
        "Core.view.extjs.login.View",
		"Core.view.extjs.booking.slide.View",
        "Core.view.extjs.booking.list.View",
        "Core.view.extjs.booking.detail.View",
        "Core.view.extjs.booking.tile.View",
        "Core.view.extjs.booking.modal.View"
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
            xtype: "bookingSlideView",
            itemId: "bookingslide", 
            hidden: true
        },		
        {
            xtype: "bookingListView",
            itemId: "bookinglist",
            hidden: true
        },
        {
            xtype: "bookingDetailView",
            itemId: "bookingdetail",
            hidden: true
        },
        {
            xtype: "bookingTileView",
            itemId: "maintile",
            hidden: true
        },
        {
            xtype: "bookingModalView",
            itemId: "bookingmodal",
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


