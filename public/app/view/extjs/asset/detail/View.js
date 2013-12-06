/**
 * The asset details view for the application.
 *
 * <p>
 * All views are purely layout and don't contain event handling,
 * application or business logic; this is all done in the view's corresponding mediator.
 * </p>
 */
Ext.define("Core.view.extjs.asset.detail.View", {
    extend: "Ext.form.Panel",
    alias: "widget.assetDetailView",
    controller: "Core.mediator.extjs.asset.detail.Mediator",
    submitEmptyText: false,

    requires: [
        "Ext.form.FieldSet",
        "Ext.Toolbar"
    ],

    items: [
        {
            xtype: "toolbar",
			itemId: "toolbar",
            ui: "neutral",			
//            title: "Asset",
            docked: "top",
            width: 400,

            items: [
                {
                    itemId: "backButton",
					ui: "neutral",
                    plugins: [
                        {
                            ptype: "localization",
                            method: "setText",
                            key: "assetDetail.back"
                        }
                    ]
                },
                {
                    xtype: "tbfill"
                },
                {
                    xtype: "label",
                    plugins: [
                        {
                            ptype: "localization",
                            method: "setTitle",
                            key: "assetDetail.title"
                        }
                    ]
                },
                {
                    xtype: "tbfill"
                },
                {
                    itemId: "saveAssetButton",
					ui: "neutral",
                    plugins: [
                        {
                            ptype: "localization",
                            method: "setText",
                            key: "assetDetail.save"
                        }
                    ]
                }
            ]
        },
        {
            xtype: "fieldset",
            itemId: "fieldset",
            items: [
                {
                    xtype: "textfield",
                    itemId: "nameTextField",
                    name: "AssetName",
                    required: true,
                    plugins: [
                        {
                            ptype: "localization",
                            method: "emptyText",
                            key: "assetDetail.assetName"
                        }
                    ]
                }
            ]
        },
        {
            xtype: "toolbar",
			ui: "neutral",
            items: [
                {
                    itemId: "deleteButton",
                    plugins: [
                        {
                            ptype: "localization",
                            method: "setText",
                            key: "assetDetail.delete"
                        }
                    ]
                }
            ]

        }
    ]
});