/**
 * The individual event contains data and event types to perform CRUD operations on individuals.
 */
Ext.define("Core.event.individual.Event", {
    extend: "FlowMVC.mvc.event.AbstractEvent",
    
    statics: {

		/**
		 * Moved to here from Navigate Event, but isn't as yet used by Navigate Event
		 */
		ACTION_BACK_SHOW_INDIVIDUAL_LIST:     	"actionBackShowIndividualList",
        ACTION_BACK_SHOW_INDIVIDUAL_TILE:     	"actionBackShowIndividualTile",
        ACTION_SHOW_INDIVIDUAL_DETAIL:        	"actionShowIndividualDetail",  
        ACTION_SHOW_INDIVIDUAL_MODAL:         	"actionShowIndividualModal",	
	
	
		///////////////////////////  ALL REPLACED BY READ_INDIVIDUALS_etc
	
			/**
			 * The get individual slide event type.
			 */
		//	GET_INDIVIDUAL_SLIDE:          "getIndividualSlide",
			
			/**
			 * The get individual slide success event type.
			 */
		//	GET_INDIVIDUAL_SLIDE_SUCCESS:  "getIndividualSlideSuccess",

			/**
			 * The get individual slide failure event type.
			 */
		//	GET_INDIVIDUAL_SLIDE_FAILURE:  "getIndividualSlideFailure",	
		
			/**
			 * The get individual list event type.
			 */
		//	GET_INDIVIDUAL_LIST:          "getIndividualList",
			
			/**
			 * The get individual list success event type.
			 */
		//	GET_INDIVIDUAL_LIST_SUCCESS:  "getIndividualListSuccess",

			/**
			 * The get individual list failure event type.
			 */
		//	GET_INDIVIDUAL_LIST_FAILURE:  "getIndividualListFailure",
			
			/**
			 * The get individual tile event type.
			 */
		//	GET_INDIVIDUAL_TILE:          "getIndividualTile",
			
			/**
			 * The get individual tile success event type.
			 */
		//	GET_INDIVIDUAL_TILE_SUCCESS:  "getIndividualTileSuccess",

			/**
			 * The get individual tile failure event type.
			 */
		//	GET_INDIVIDUAL_TILE_FAILURE:  "getIndividualTileFailure",        

			/**
			 * The get individual modal event type.
			 */
		//	GET_INDIVIDUAL_MODAL:          "getIndividualModal",
			
			/**
			 * The get individual modal success event type.
			 */
		//	GET_INDIVIDUAL_MODAL_SUCCESS:  "getIndividualModalSuccess",

			/**
			 * The get individual modal failure event type.
			 */
		//	GET_INDIVIDUAL_MODAL_FAILURE:  "getIndividualModalFailure",	
			
			/**
			 * The get individual event type.
			 */
		//	GET_INDIVIDUAL:               "getIndividual",

			/**
			 * The get individual success event type.
			 */
		//	GET_INDIVIDUAL_SUCCESS:       "getIndividualSuccess",

			/**
			 * The get individual failure event type.
			 */
		//	GET_INDIVIDUAL_FAILURE:       "getIndividualFailure",
		
		
		//////////////////////////
		

        /**
         * The create individual event type.
         */
        CREATE_INDIVIDUAL:            "createIndividual",

        /**
         * The create individual success event type.
         */
        CREATE_INDIVIDUAL_SUCCESS:    "createIndividualSuccess",

        /**
         * The create individual failure event type.
         */
        CREATE_INDIVIDUAL_FAILURE:    "createIndividualFailure",

        /**
         * The update individual event type.
         */
        UPDATE_INDIVIDUAL:            "updateIndividual",

        /**
         * The update individual success event type.
         */
        UPDATE_INDIVIDUAL_SUCCESS:    "updateIndividualSuccess",

        /**
         * The update individual failure event type.
         */
        UPDATE_INDIVIDUAL_FAILURE:    "updateIndividualFailure",

        /**
         * The delete individual event type.
         */
        DELETE_INDIVIDUAL:            "deleteIndividual",

        /**
         * The delete individual success event type.
         */
        DELETE_INDIVIDUAL_SUCCESS:    "deleteIndividualSuccess",

        /**
         * The delete individual failure event type.
         */
        DELETE_INDIVIDUAL_FAILURE:    "deleteIndividualFailure",
		
        /**
         * The read individuals event type.
         */
        READ_INDIVIDUALS:            "readIndividuals",

        /**
         * The read individuals success event type.
         */
        READ_INDIVIDUALS_SUCCESS:    "readIndividualsSuccess",

        /**
         * The read individuals failure event type.
         */
        READ_INDIVIDUALS_FAILURE:    "readIndividualsFailure"		
		
    },

    /**
     * @property {Number} id [readOnly=false]
     * The id of a individual.
     */
    id: null,

    /**
     * @property {Core.model.individual.Model} individual [readOnly=false]
     * A individual to perform CRUD actions on.
     */
    individual: null,

    /**
     * Constructor. 
     *
     * @param {String} type The event type.
     * @param {Number} id The id of the individual the CRUD operation is acting on.
     * @param {Core.model.individual.Model} individual The individual the CRUD operation is acting on.     
     */
    constructor: function(type, id, individual) {
        this.callParent(arguments);

        this.id = id;
        this.individual = individual;
    }
});	