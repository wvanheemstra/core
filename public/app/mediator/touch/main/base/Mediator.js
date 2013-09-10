/**
 * The main base mediator.
 */
Ext.define("Core.mediator.touch.main.base.Mediator", {
    extend: "Core.mediator.abstract.Mediator",

    requires: [
        "Core.event.main.Event",
		"Core.event.navigation.Event",
		"Core.event.ui.Event",
		"Core.event.title.Event",
		"Core.event.company.Event",
		"Core.event.url.Event",
		"Core.event.background.Event"
    ],

    inject: [
        "mainStore",
        "logger"
    ]
    
});