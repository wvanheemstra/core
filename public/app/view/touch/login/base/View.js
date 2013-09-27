/**
 * The base of login view for the application.
 *
 * <p>  
 * All views are purely layout and don't contain event handling,
 * application or business logic; this is all done in the view's corresponding mediator.
 * </p>
 */
Ext.define("Core.view.touch.login.base.View", {
    extend: "Ext.form.Panel",
	
    requires: [
		"Ext.TitleBar", // Require explicitely
        "Ext.form.FieldSet",
        "Ext.form.Password",
        "Ext.Label",
        "Ext.Img",
        "Ext.util.DelayedTask"
    ],

    config: {
	
    }
});