/**
 * The organisation event contains data and event types to perform CRUD operations on organisations.
 */
Ext.define("Core.event.organisation.Event", {
    extend: "FlowMVC.mvc.event.AbstractEvent",
    
    statics: {

        /**
         * The get organisation slide event type.
         */
        GET_ORGANISATION_SLIDE:          "getOrganisationSlide",
    	
        /**
         * The get organisation slide success event type.
         */
        GET_ORGANISATION_SLIDE_SUCCESS:  "getOrganisationSlideSuccess",

        /**
         * The get organisation slide failure event type.
         */
        GET_ORGANISATION_SLIDE_FAILURE:  "getOrganisationSlideFailure",	
	
        /**
         * The get organisation list event type.
         */
        GET_ORGANISATION_LIST:          "getOrganisationList",
    	
        /**
         * The get organisation list success event type.
         */
        GET_ORGANISATION_LIST_SUCCESS:  "getOrganisationListSuccess",

        /**
         * The get organisation list failure event type.
         */
        GET_ORGANISATION_LIST_FAILURE:  "getOrganisationListFailure",
        
        /**
         * The get organisation tile event type.
         */
        GET_ORGANISATION_TILE:          "getOrganisationTile",
    	
        /**
         * The get organisation tile success event type.
         */
        GET_ORGANISATION_TILE_SUCCESS:  "getOrganisationTileSuccess",

        /**
         * The get organisation tile failure event type.
         */
        GET_ORGANISATION_TILE_FAILURE:  "getOrganisationTileFailure",        

        /**
         * The get organisation modal event type.
         */
        GET_ORGANISATION_MODAL:          "getOrganisationModal",
    	
        /**
         * The get organisation modal success event type.
         */
        GET_ORGANISATION_MODAL_SUCCESS:  "getOrganisationModalSuccess",

        /**
         * The get organisation modal failure event type.
         */
        GET_ORGANISATION_MODAL_FAILURE:  "getOrganisationModalFailure",	
		
        /**
         * The get organisation event type.
         */
        GET_ORGANISATION:               "getOrganisation",

        /**
         * The get organisation success event type.
         */
        GET_ORGANISATION_SUCCESS:       "getOrganisationSuccess",

        /**
         * The get organisation failure event type.
         */
        GET_ORGANISATION_FAILURE:       "getOrganisationFailure",

        /**
         * The create organisation event type.
         */
        CREATE_ORGANISATION:            "createOrganisation",

        /**
         * The create organisation success event type.
         */
        CREATE_ORGANISATION_SUCCESS:    "createOrganisationSuccess",

        /**
         * The create organisation failure event type.
         */
        CREATE_ORGANISATION_FAILURE:    "createOrganisationFailure",

        /**
         * The update organisation event type.
         */
        UPDATE_ORGANISATION:            "updateOrganisation",

        /**
         * The update organisation success event type.
         */
        UPDATE_ORGANISATION_SUCCESS:    "updateOrganisationSuccess",

        /**
         * The update organisation failure event type.
         */
        UPDATE_ORGANISATION_FAILURE:    "updateOrganisationFailure",

        /**
         * The delete organisation event type.
         */
        DELETE_ORGANISATION:            "deleteOrganisation",

        /**
         * The delete organisation success event type.
         */
        DELETE_ORGANISATION_SUCCESS:    "deleteOrganisationSuccess",

        /**
         * The delete organisation failure event type.
         */
        DELETE_ORGANISATION_FAILURE:    "deleteOrganisationFailure"
    },

    /**
     * @property {Number} id [readOnly=false]
     * The id of a organisation.
     */
    id: null,

    /**
     * @property {Core.model.organisation.Model} organisation [readOnly=false]
     * A organisation to perform CRUD actions on.
     */
    organisation: null,

    /**
     * Constructor. Allows the username and password for authentication to be set on the event.
     *
     * @param {String} type The event type.
     * @param {Number} id The id of the organisation the CRUD operation is acting on.
     * @param {Core.model.organisation.Model} organisation The organisation the CRUD operation is acting on.     
     */
    constructor: function(type, id, organisation) {
        this.callParent(arguments);

        this.id = id;
        this.organisation = organisation;
    }
})	