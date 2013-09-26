/**
 * The salutation event contains data and event types to perform CRUD operations on salutations.
 */
Ext.define("Core.event.salutation.Event", {
    extend: "FlowMVC.mvc.event.AbstractEvent",
    
    statics: {

		/**
		 * Moved to here from Navigate Event, but isn't as yet used by Navigate Event
		 */
		ACTION_BACK_SHOW_SALUTATION_LIST:     	"actionBackShowSalutationList",
        ACTION_BACK_SHOW_SALUTATION_TILE:     	"actionBackShowSalutationTile",
        ACTION_SHOW_SALUTATION_DETAIL:        	"actionShowSalutationDetail",  
        ACTION_SHOW_SALUTATION_MODAL:         	"actionShowSalutationModal",	
	
        /**
         * The get salutation slide event type.
         */
        GET_SALUTATION_SLIDE:          "getSalutationSlide",
    	
        /**
         * The get salutation slide success event type.
         */
        GET_SALUTATION_SLIDE_SUCCESS:  "getSalutationSlideSuccess",

        /**
         * The get salutation slide failure event type.
         */
        GET_SALUTATION_SLIDE_FAILURE:  "getSalutationSlideFailure",	
	
        /**
         * The get salutation list event type.
         */
        GET_SALUTATION_LIST:          "getSalutationList",
    	
        /**
         * The get salutation list success event type.
         */
        GET_SALUTATION_LIST_SUCCESS:  "getSalutationListSuccess",

        /**
         * The get salutation list failure event type.
         */
        GET_SALUTATION_LIST_FAILURE:  "getSalutationListFailure",
        
        /**
         * The get salutation tile event type.
         */
        GET_SALUTATION_TILE:          "getSalutationTile",
    	
        /**
         * The get salutation tile success event type.
         */
        GET_SALUTATION_TILE_SUCCESS:  "getSalutationTileSuccess",

        /**
         * The get salutation tile failure event type.
         */
        GET_SALUTATION_TILE_FAILURE:  "getSalutationTileFailure",        

        /**
         * The get salutation modal event type.
         */
        GET_SALUTATION_MODAL:          "getSalutationModal",
    	
        /**
         * The get salutation modal success event type.
         */
        GET_SALUTATION_MODAL_SUCCESS:  "getSalutationModalSuccess",

        /**
         * The get salutation modal failure event type.
         */
        GET_SALUTATION_MODAL_FAILURE:  "getSalutationModalFailure",	
		
        /**
         * The get salutation event type.
         */
        GET_SALUTATION:               "getSalutation",

        /**
         * The get salutation success event type.
         */
        GET_SALUTATION_SUCCESS:       "getSalutationSuccess",

        /**
         * The get salutation failure event type.
         */
        GET_SALUTATION_FAILURE:       "getSalutationFailure",

        /**
         * The create salutation event type.
         */
        CREATE_SALUTATION:            "createSalutation",

        /**
         * The create salutation success event type.
         */
        CREATE_SALUTATION_SUCCESS:    "createSalutationSuccess",

        /**
         * The create salutation failure event type.
         */
        CREATE_SALUTATION_FAILURE:    "createSalutationFailure",

        /**
         * The update salutation event type.
         */
        UPDATE_SALUTATION:            "updateSalutation",

        /**
         * The update salutation success event type.
         */
        UPDATE_SALUTATION_SUCCESS:    "updateSalutationSuccess",

        /**
         * The update salutation failure event type.
         */
        UPDATE_SALUTATION_FAILURE:    "updateSalutationFailure",

        /**
         * The delete salutation event type.
         */
        DELETE_SALUTATION:            "deleteSalutation",

        /**
         * The delete salutation success event type.
         */
        DELETE_SALUTATION_SUCCESS:    "deleteSalutationSuccess",

        /**
         * The delete salutation failure event type.
         */
        DELETE_SALUTATION_FAILURE:    "deleteSalutationFailure",
		
		/**
         * The read salutations event type.
         */
        READ_SALUTATIONS:            "readSalutations",

        /**
         * The read salutations success event type.
         */
        READ_SALUTATIONS_SUCCESS:    "readSalutationsSuccess",

        /**
         * The read salutations failure event type.
         */
        READ_SALUTATIONS_FAILURE:    "readSalutationsFailure"
		
    },

    /**
     * @property {Number} id [readOnly=false]
     * The id of a salutation.
     */
    id: null,

    /**
     * @property {Core.model.salutation.Model} salutation [readOnly=false]
     * A salutation to perform CRUD actions on.
     */
    salutation: null,

    /**
     * Constructor. Allows the username and password for authentication to be set on the event.
     *
     * @param {String} type The event type.
     * @param {Number} id The id of the salutation the CRUD operation is acting on.
     * @param {Core.model.salutation.Model} salutation The salutation the CRUD operation is acting on.     
     */
    constructor: function(type, id, salutation) {
        this.callParent(arguments);

        this.id = id;
        this.salutation = salutation;
    }
})	