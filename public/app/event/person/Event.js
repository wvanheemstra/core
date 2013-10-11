/**
 * The person event contains data and event types to perform CRUD operations on persons.
 */
Ext.define("Core.event.person.Event", {
    extend: "FlowMVC.mvc.event.AbstractEvent",
    
    statics: {

		/**
		 * Moved to here from Navigate Event, but isn't as yet used by Navigate Event
		 */
		ACTION_BACK_SHOW_PERSON_LIST:     	"actionBackShowPersonList",
        ACTION_BACK_SHOW_PERSON_TILE:     	"actionBackShowPersonTile",
        ACTION_SHOW_PERSON_DETAIL:        	"actionShowPersonDetail",  
        ACTION_SHOW_PERSON_MODAL:         	"actionShowPersonModal",	
	
	
		///////////////////////////  ALL REPLACED BY READ_PERSONS_etc
	
			/**
			 * The get person slide event type.
			 */
			GET_PERSON_SLIDE:          "getPersonSlide",
			
			/**
			 * The get person slide success event type.
			 */
			GET_PERSON_SLIDE_SUCCESS:  "getPersonSlideSuccess",

			/**
			 * The get person slide failure event type.
			 */
			GET_PERSON_SLIDE_FAILURE:  "getPersonSlideFailure",	
		
			/**
			 * The get person list event type.
			 */
			GET_PERSON_LIST:          "getPersonList",
			
			/**
			 * The get person list success event type.
			 */
			GET_PERSON_LIST_SUCCESS:  "getPersonListSuccess",

			/**
			 * The get person list failure event type.
			 */
			GET_PERSON_LIST_FAILURE:  "getPersonListFailure",
			
			/**
			 * The get person tile event type.
			 */
			GET_PERSON_TILE:          "getPersonTile",
			
			/**
			 * The get person tile success event type.
			 */
			GET_PERSON_TILE_SUCCESS:  "getPersonTileSuccess",

			/**
			 * The get person tile failure event type.
			 */
			GET_PERSON_TILE_FAILURE:  "getPersonTileFailure",        

			/**
			 * The get person modal event type.
			 */
			GET_PERSON_MODAL:          "getPersonModal",
			
			/**
			 * The get person modal success event type.
			 */
			GET_PERSON_MODAL_SUCCESS:  "getPersonModalSuccess",

			/**
			 * The get person modal failure event type.
			 */
			GET_PERSON_MODAL_FAILURE:  "getPersonModalFailure",	
			
			/**
			 * The get person event type.
			 */
			GET_PERSON:               "getPerson",

			/**
			 * The get person success event type.
			 */
			GET_PERSON_SUCCESS:       "getPersonSuccess",

			/**
			 * The get person failure event type.
			 */
			GET_PERSON_FAILURE:       "getPersonFailure",
		
		
		//////////////////////////
		

        /**
         * The create person event type.
         */
        CREATE_PERSON:            "createPerson",

        /**
         * The create person success event type.
         */
        CREATE_PERSON_SUCCESS:    "createPersonSuccess",

        /**
         * The create person failure event type.
         */
        CREATE_PERSON_FAILURE:    "createPersonFailure",

        /**
         * The update person event type.
         */
        UPDATE_PERSON:            "updatePerson",

        /**
         * The update person success event type.
         */
        UPDATE_PERSON_SUCCESS:    "updatePersonSuccess",

        /**
         * The update person failure event type.
         */
        UPDATE_PERSON_FAILURE:    "updatePersonFailure",

        /**
         * The delete person event type.
         */
        DELETE_PERSON:            "deletePerson",

        /**
         * The delete person success event type.
         */
        DELETE_PERSON_SUCCESS:    "deletePersonSuccess",

        /**
         * The delete person failure event type.
         */
        DELETE_PERSON_FAILURE:    "deletePersonFailure",
		
        /**
         * The read persons event type.
         */
        READ_PERSONS:            "readPersons",

        /**
         * The read persons success event type.
         */
        READ_PERSONS_SUCCESS:    "readPersonsSuccess",

        /**
         * The read persons failure event type.
         */
        READ_PERSONS_FAILURE:    "readPersonsFailure"		
		
    },

    /**
     * @property {Number} id [readOnly=false]
     * The id of a person.
     */
    id: null,

    /**
     * @property {Core.model.person.Model} person [readOnly=false]
     * A person to perform CRUD actions on.
     */
    person: null,

    /**
     * Constructor. 
     *
     * @param {String} type The event type.
     * @param {Number} id The id of the person the CRUD operation is acting on.
     * @param {Core.model.person.Model} person The person the CRUD operation is acting on.     
     */
    constructor: function(type, id, person) {
        this.callParent(arguments);

        this.id = id;
        this.person = person;
    }
})	