/**
 * The basic login view for the application.
 *
 * <p>
 * All views are purely layout and don't contain event handling,
 * application or business logic; this is all done in the view"s corresponding mediator.
 * </p>
 */
Ext.define("Core.view.extjs.login.View", {
    extend: "Ext.Container",
    alias: "widget.loginView",
    controller: "Core.mediator.extjs.login.Mediator",

    layout: {
        type: "vbox",
        pack: "center",
        align: "center"
    },

    items: [
		{
			xtype: 'panel',
			//ui: 'neutral',
			itemId: 'company',
			title: 'Your Company',
			items: [
				{
					xtype: "form",
					//ui: "neutral",
					plugins: [
						{
							ptype: "localization",
							method: "setTitle",
							key: "login.title"
						}
					],

					frame: true,
					bodyPadding: "5px 5px 0",
					width: 350,
					fieldDefaults: {
						labelWidth: 125,
						msgTarget: "side",
						autoFitErrors: false
					},
					defaults: {
						width: 300,
						inputType: "password"
					},
					defaultType: "textfield",

					buttons: [
						{
							id:"logInButton",
							//ui: "neutral",
							plugins: [
								{
									ptype: "localization",
									method: "setText",
									key: "login.submit"
								}
							]
						}
					],

					items: [
						{
							itemId: "usernameTextField",
							inputType: "text",
							plugins: [
								{
									ptype: "localization",
									method: "setFieldLabel",
									key: "login.username"
								}
							]
						},
						{
							itemId: "passwordTextField",
							plugins: [
								{
									ptype: "localization",
									method: "setFieldLabel",
									key: "login.password"
								}
							]
						},
						{
							xtype: "label",
							plugins: [
								{
									ptype: "localization",
									method: "setText",
									key: "login.passwordHint"
								}
							]
						},
						{
							xtype: "checkboxfield",
							checked: false,
							itemId: "keepmeloggedinCheckboxField",
							boxLabel: '...',
							plugins: [
								{
									ptype: "localization",
									method: "setBoxLabel",
									key: "login.keepmeloggedin"
								}
							]
						},				
						{
							xtype: "label",
							itemId: "logInFailedLabel",
							hidden: true,
							hideAnimation: "fadeOut",
							showAnimation: "fadeIn",
							style: "color:#990000;margin:5px 0px;",
							plugins: [
								{
									ptype: "localization",
									method: "setText",
									key: "login.loginFailed"
								}
							]
						}
					]
				},
				{
					xtype: "container",
					style: "text-align: center; font-size: small; padding-bottom: 6px;",
					docked: "bottom",
					html:  "Built using Sencha Ext JS " + Ext.getVersion('extjs')				
					//html:  "Built using Sencha Touch " + Ext.getVersion('touch'),
				}			
			]
		}
    ]
});


