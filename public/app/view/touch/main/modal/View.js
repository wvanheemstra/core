/**
 * The modal of main view for the application.
 *
 * <p>
 * All views are purely layout and don't contain event handling,
 * application or business logic; this is all done in the view's corresponding mediator.
 * </p>
 */
 Ext.define("Core.view.touch.main.modal.View", {
    extend: "Core.view.touch.main.base.View",
    alias: "widget.mainModalView",
    controller: "Core.mediator.touch.main.modal.Mediator",

    requires: [
        // empty
    ],
	
	config: {
		html: "<iframe src='http://www.amazon.com' width='100%' height='100%' scrolling='no'>Loading ...</iframe>",
		/*
		iframe : {
			width: "100%",
			height: "100%",
			scrolling : "no",
			src: "http://www.amazon.com"
		},
		*/
		layout: {
			type: "fit"
		},
		scroll : "vertical",
        items: [{
			xtype: "titlebar",
			itemId: "titlebar",
			ui: "neutral",
			docked: "top",
			plugins: [
				{
					type: "localization",
					method: "setTitle",
					key: "mainModal.title"
				}
			],
			items: [{
				xtype: "button",
				iconMask: true,
				iconCls: 'delete',
				itemId: "closeButton",
				align: "left",
				plugins: [
					{
						type: "localization",
						method: "setText",
						key: "mainModal.close"
					}
				]
			}]
		},{
			xtype: "toolbar",
			itemId: "bottombar",
			ui: "neutral",
			docked: "bottom"
		}]
    }
});	