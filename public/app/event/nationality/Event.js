/**
 * The nationality event contains data and event types to perform CRUD operations on nationalities.
 */
Ext.define("Core.event.nationality.Event", {
    extend: "FlowMVC.mvc.event.AbstractEvent",
    
    statics: {

		/**
		 * Moved to here from Navigate Event, but isn't as yet used by Navigate Event
		 */
		ACTION_BACK_SHOW_NATIONALITY_LIST:     	"actionBackShowNationalityList",
        ACTION_BACK_SHOW_NATIONALITY_TILE:     	"actionBackShowNationalityTile",
        ACTION_SHOW_NATIONALITY_DETAIL:        	"actionShowNationalityDetail",  
        ACTION_SHOW_NATIONALITY_MODAL:         	"actionShowNationalityModal",	
	
        /**
         * The get nationality slide event type.
         */
        GET_NATIONALITY_SLIDE:          "getNationalitySlide",
    	
        /**
         * The get nationality slide success event type.
         */
        GET_NATIONALITY_SLIDE_SUCCESS:  "getNationalitySlideSuccess",

        /**
         * The get nationality slide failure event type.
         */
        GET_NATIONALITY_SLIDE_FAILURE:  "getNationalitySlideFailure",	
	
        /**
         * The get nationality list event type.
         */
        GET_NATIONALITY_LIST:          "getNationalityList",
    	
        /**
         * The get nationality list success event type.
         */
        GET_NATIONALITY_LIST_SUCCESS:  "getNationalityListSuccess",

        /**
         * The get nationality list failure event type.
         */
        GET_NATIONALITY_LIST_FAILURE:  "getNationalityListFailure",
        
        /**
         * The get nationality tile event type.
         */
        GET_NATIONALITY_TILE:          "getNationalityTile",
    	
        /**
         * The get nationality tile success event type.
         */
        GET_NATIONALITY_TILE_SUCCESS:  "getNationalityTileSuccess",

        /**
         * The get nationality tile failure event type.
         */
        GET_NATIONALITY_TILE_FAILURE:  "getNationalityTileFailure",        

        /**
         * The get nationality modal event type.
         */
        GET_NATIONALITY_MODAL:          "getNationalityModal",
    	
        /**
         * The get nationality modal success event type.
         */
        GET_NATIONALITY_MODAL_SUCCESS:  "getNationalityModalSuccess",

        /**
         * The get nationality modal failure event type.
         */
        GET_NATIONALITY_MODAL_FAILURE:  "getNationalityModalFailure",	
		
        /**
         * The get nationality event type.
         */
        GET_NATIONALITY:               "getNationality",

        /**
         * The get nationality success event type.
         */
        GET_NATIONALITY_SUCCESS:       "getNationalitySuccess",

        /**
         * The get nationality failure event type.
         */
        GET_NATIONALITY_FAILURE:       "getNationalityFailure",

        /**
         * The create nationality event type.
         */
        CREATE_NATIONALITY:            "createNationality",

        /**
         * The create nationality success event type.
         */
        CREATE_NATIONALITY_SUCCESS:    "createNationalitySuccess",

        /**
         * The create nationality failure event type.
         */
        CREATE_NATIONALITY_FAILURE:    "createNationalityFailure",

        /**
         * The update nationality event type.
         */
        UPDATE_NATIONALITY:            "updateNationality",

        /**
         * The update nationality success event type.
         */
        UPDATE_NATIONALITY_SUCCESS:    "updateNationalitySuccess",

        /**
         * The update nationality failure event type.
         */
        UPDATE_NATIONALITY_FAILURE:    "updateNationalityFailure",

        /**
         * The delete nationality event type.
         */
        DELETE_NATIONALITY:            "deleteNationality",

        /**
         * The delete nationality success event type.
         */
        DELETE_NATIONALITY_SUCCESS:    "deleteNationalitySuccess",

        /**
         * The delete nationality failure event type.
         */
        DELETE_NATIONALITY_FAILURE:    "deleteNationalityFailure",
		
		/**
         * The read nationalities event type.
         */
        READ_NATIONALITIES:            "readNationalities",

        /**
         * The read nationalities success event type.
         */
        READ_NATIONALITIES_SUCCESS:    "readNationalitiesSuccess",

        /**
         * The read nationalities failure event type.
         */
        READ_NATIONALITIES_FAILURE:    "readNationalitiesFailure"
		
    },

    /**
     * @property {Number} id [readOnly=false]
     * The id of a nationality.
     */
    id: null,

    /**
     * @property {Core.model.nationality.Model} nationality [readOnly=false]
     * A nationality to perform CRUD actions on.
     */
    nationality: null,

    /**
     * Constructor. Allows the username and password for authentication to be set on the event.
     *
     * @param {String} type The event type.
     * @param {Number} id The id of the nationality the CRUD operation is acting on.
     * @param {Core.model.nationality.Model} nationality The nationality the CRUD operation is acting on.     
     */
    constructor: function(type, id, nationality) {
        this.callParent(arguments);

        this.id = id;
        this.nationality = nationality;
    }
})	