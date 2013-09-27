/**
 * The person base mediator.
 */
Ext.define("Core.mediator.touch.person.base.Mediator", {
    extend: "Core.mediator.abstract.Mediator",

    requires: [
        "Core.event.person.Event",
		"Core.event.navigation.Event",
		"Core.event.ui.Event",
		"Core.event.title.Event",
		"Core.event.company.Event",
		"Core.event.url.Event",
		"Core.event.background.Event",
		"Core.event.salutation.Event",
		"Core.event.gender.Event"		
    ],

    inject: [
        "personStore",
		"salutationStore", // MAYBE NOT REQUIRED HERE
		"genderStore", // MAYBE NOT REQUIRED HERE		
        "logger"
    ]
    
});