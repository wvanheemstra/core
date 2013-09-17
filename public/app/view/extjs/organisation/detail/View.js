/**
 * The organisation details view for the application.
 *
 * <p>
 * All views are purely layout and don't contain event handling,
 * application or business logic; this is all done in the view's corresponding mediator.
 * </p>
 */
Ext.define("Core.view.extjs.organisation.detail.View", {
    extend: "Ext.form.Panel",
    alias: "widget.organisationDetailView",
    controller: "Core.mediator.extjs.organisation.detail.Mediator",
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
//            title: "Organisation",
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
                            key: "organisationDetail.back"
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
                            key: "organisationDetail.title"
                        }
                    ]
                },
                {
                    xtype: "tbfill"
                },
                {
                    itemId: "saveOrganisationButton",
					ui: "neutral",
                    plugins: [
                        {
                            ptype: "localization",
                            method: "setText",
                            key: "organisationDetail.save"
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
                    name: "name",
                    required: true,
                    plugins: [
                        {
                            ptype: "localization",
                            method: "emptyText",
                            key: "organisationDetail.name"
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
                            key: "organisationDetail.delete"
                        }
                    ]
                }
            ]

        }
    ]
});