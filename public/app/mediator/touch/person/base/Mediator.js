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
		"Core.event.gender.Event",
		"Core.event.nationality.Event",
		"Core.event.date.Event",
		"Core.event.membership.Event",
		"Core.event.group.Event"
    ],

    inject: [
        "personStore",
		"salutationStore", // MAYBE NOT REQUIRED HERE
		"genderStore", // MAYBE NOT REQUIRED HERE	
		"nationalityStore", // MAYBE NOT REQUIRED HERE
		"dateStore", // MAYBE NOT REQUIRED HERE	
		"membershipStore", // MAYBE NOT REQUIRED HERE	
		"groupStore", // MAYBE NOT REQUIRED HERE		
        "logger"
    ]
    
});