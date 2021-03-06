/**
 * The product details view for the application.
 *
 * <p>
 * All views are purely layout and don't contain event handling,
 * application or business logic; this is all done in the view's corresponding mediator.
 * </p>
 */
Ext.define("Core.view.touch.product.detail.View", {
    extend: "Ext.form.Panel",
    alias: "widget.productDetailView",
    controller: "Core.mediator.touch.product.detail.Mediator",

    requires: [
		"Ext.TitleBar", // Require explicitely
        "Ext.form.FieldSet"
    ],

    config: {

        items: [
            {
                xtype: "titlebar",
                itemId: "titlebar",
                ui: "neutral",
                docked: "top",
                plugins: [
                    {
                        type: "localization",
                        method: "setTitle",
                        key: "productDetail.title"
                    }
                ],
                items: [
                    {
                        xtype: "button",
                        itemId: "backButton",
                        align: "left",
                        plugins: [
                            {
                                type: "localization",
                                method: "setText",
                                key: "productDetail.back"
                            }
                        ]
                    },
					{
						xtype: "spacer"
					},
                    {
						xtype: "button",
						itemId: "deleteButton",
						align: "right",
						ui: "neutral", // WAS action
						plugins: [
							{
								type: "localization",
								method: "setText",
								key: "productDetail.delete"
							}
						]
					}
                ]
            },
            {
                xtype: "fieldset",
                itemId: "productDetailForm",
				defaults: {
					labelWidth: "35%"
				},
                items: [
                    {
                        xtype: "textfield",
                        itemId: "productNameTextField",
                        name: "ProductName",
						label: "Name",
                        required: true,
                        plugins: [
                            {
                                type: "localization",
                                method: "setPlaceHolder",
                                key: "productDetail.productName"
                            }
                        ]
                    }
                ]
            },
            {
                xtype: "titlebar", // Allows for button alignment
                itemId: "bottombar",
                ui: "neutral",
                docked: "bottom",
                items: [
                    {
					xtype: "button",
					itemId: "saveProductButton",
					align: "right",
					ui: "neutral", // WAS action
					plugins: [
						{
							type: "localization",
							method: "setText",
							key: "productDetail.save"
						}
					]
				}]
			}
        ]
    }
});