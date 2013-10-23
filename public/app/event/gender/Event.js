/**
 * The gender event contains data and event types to perform CRUD operations on genders.
 */
Ext.define("Core.event.gender.Event", {
    extend: "FlowMVC.mvc.event.AbstractEvent",
    
    statics: {

		/**
		 * Moved to here from Navigate Event, but isn't as yet used by Navigate Event
		 */
		ACTION_BACK_SHOW_GENDER_LIST:     	"actionBackShowGenderList",
        ACTION_BACK_SHOW_GENDER_TILE:     	"actionBackShowGenderTile",
        ACTION_SHOW_GENDER_DETAIL:        	"actionShowGenderDetail",  
        ACTION_SHOW_GENDER_MODAL:         	"actionShowGenderModal",	
	
        /**
         * The get gender slide event type.
         */
        GET_GENDER_SLIDE:          "getGenderSlide",
    	
        /**
         * The get gender slide success event type.
         */
        GET_GENDER_SLIDE_SUCCESS:  "getGenderSlideSuccess",

        /**
         * The get gender slide failure event type.
         */
        GET_GENDER_SLIDE_FAILURE:  "getGenderSlideFailure",	
	
        /**
         * The get gender list event type.
         */
        GET_GENDER_LIST:          "getGenderList",
    	
        /**
         * The get gender list success event type.
         */
        GET_GENDER_LIST_SUCCESS:  "getGenderListSuccess",

        /**
         * The get gender list failure event type.
         */
        GET_GENDER_LIST_FAILURE:  "getGenderListFailure",
        
        /**
         * The get gender tile event type.
         */
        GET_GENDER_TILE:          "getGenderTile",
    	
        /**
         * The get gender tile success event type.
         */
        GET_GENDER_TILE_SUCCESS:  "getGenderTileSuccess",

        /**
         * The get gender tile failure event type.
         */
        GET_GENDER_TILE_FAILURE:  "getGenderTileFailure",        

        /**
         * The get gender modal event type.
         */
        GET_GENDER_MODAL:          "getGenderModal",
    	
        /**
         * The get gender modal success event type.
         */
        GET_GENDER_MODAL_SUCCESS:  "getGenderModalSuccess",

        /**
         * The get gender modal failure event type.
         */
        GET_GENDER_MODAL_FAILURE:  "getGenderModalFailure",	
		
        /**
         * The get gender event type.
         */
        GET_GENDER:               "getGender",

        /**
         * The get gender success event type.
         */
        GET_GENDER_SUCCESS:       "getGenderSuccess",

        /**
         * The get gender failure event type.
         */
        GET_GENDER_FAILURE:       "getGenderFailure",

        /**
         * The create gender event type.
         */
        CREATE_GENDER:            "createGender",

        /**
         * The create gender success event type.
         */
        CREATE_GENDER_SUCCESS:    "createGenderSuccess",

        /**
         * The create gender failure event type.
         */
        CREATE_GENDER_FAILURE:    "createGenderFailure",

        /**
         * The update gender event type.
         */
        UPDATE_GENDER:            "updateGender",

        /**
         * The update gender success event type.
         */
        UPDATE_GENDER_SUCCESS:    "updateGenderSuccess",

        /**
         * The update gender failure event type.
         */
        UPDATE_GENDER_FAILURE:    "updateGenderFailure",

        /**
         * The delete gender event type.
         */
        DELETE_GENDER:            "deleteGender",

        /**
         * The delete gender success event type.
         */
        DELETE_GENDER_SUCCESS:    "deleteGenderSuccess",

        /**
         * The delete gender failure event type.
         */
        DELETE_GENDER_FAILURE:    "deleteGenderFailure",
		
		/**
         * The read genders event type.
         */
        READ_GENDERS:            "readGenders",

        /**
         * The read genders success event type.
         */
        READ_GENDERS_SUCCESS:    "readGendersSuccess",

        /**
         * The read genders failure event type.
         */
        READ_GENDERS_FAILURE:    "readGendersFailure"
		
    },

    /**
     * @property {Number} id [readOnly=false]
     * The id of a gender.
     */
    id: null,

    /**
     * @property {Core.model.gender.Model} gender [readOnly=false]
     * A gender to perform CRUD actions on.
     */
    gender: null,

    /**
     * Constructor. Allows the username and password for authentication to be set on the event.
     *
     * @param {String} type The event type.
     * @param {Number} id The id of the gender the CRUD operation is acting on.
     * @param {Core.model.gender.Model} gender The gender the CRUD operation is acting on.     
     */
    constructor: function(type, id, gender) {
        this.callParent(arguments);

        this.id = id;
        this.gender = gender;
    }
});	