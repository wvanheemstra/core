/**
 * @class Core.view.extjs.viewport.individual.View
 * The basic Viewport for the application.
 *
 * @extends Ext.container.Viewport
 * <p>
 * All views are purely layout and don't contain event handling,
 * application or business logic; this is all done in the view's corresponding mediator.
 * </p>
 */
Ext.define("Core.view.extjs.viewport.individual.View", {
    extend: "Ext.container.Viewport",
    alias: "widget.viewportView",
    controller: "Core.mediator.extjs.viewport.individual.Mediator",
	/**
	 * @property {Number} width
	 */
    width: 800,

    requires: [
		"Core.config.global.Config",
        "Core.view.extjs.login.View",
	//	"Core.view.extjs.individual.slide.View", // THROWS AN ERROR
        "Core.view.extjs.individual.list.View",
        "Core.view.extjs.individual.detail.View",
    //    "Core.view.extjs.individual.tile.View", // THROWS AN ERROR
        "Core.view.extjs.individual.modal.View"
    ],

    config: {
		/**
		 * @property {Number} width
		 */
        width: 800,
		/**
		 * @property {Number} currentItem
		 */
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
    //    {
    //        xtype: "individualSlideView",
    //        itemId: "individualslide", 
    //        hidden: true
    //    },		
        {
            xtype: "individualListView",
            itemId: "individuallist",
            hidden: true
        },
        {
            xtype: "individualDetailView",
            itemId: "individualdetail",
            hidden: true
        }//,
    //    {
    //        xtype: "individualTileView",
    //        itemId: "maintile",
    //        hidden: true
    //    },
    //    {
    //        xtype: "individualModalView",
    //        itemId: "individualmodal",
    //        hidden: true
    //    }
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


