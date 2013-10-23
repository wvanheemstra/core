/**
 * The person group event contains data and event types to perform CRUD operations on person groups.
 */
Ext.define("Core.event.person.group.Event", {
    extend: "FlowMVC.mvc.event.AbstractEvent",
    
    statics: {	
		
        /**
         * The get person group event type.
         */
        GET_PERSON_GROUP:               "getPersonGroup",

        /**
         * The get person group success event type.
         */
        GET_PERSON_GROUP_SUCCESS:       "getPersonGroupSuccess",

        /**
         * The get person group failure event type.
         */
        GET_PERSON_GROUP_FAILURE:       "getPersonGroupFailure",

        /**
         * The create person group event type.
         */
        CREATE_PERSON_GROUP:            "createPersonGroup",

        /**
         * The create person group success event type.
         */
        CREATE_PERSON_GROUP_SUCCESS:    "createPersonGroupSuccess",

        /**
         * The create person group failure event type.
         */
        CREATE_PERSON_GROUP_FAILURE:    "createPersonGroupFailure",

        /**
         * The update person group event type.
         */
        UPDATE_PERSON_GROUP:            "updatePersonGroup",

        /**
         * The update person group success event type.
         */
        UPDATE_PERSON_GROUP_SUCCESS:    "updatePersonGroupSuccess",

        /**
         * The update person group failure event type.
         */
        UPDATE_PERSON_GROUP_FAILURE:    "updatePersonGroupFailure",

        /**
         * The delete person group event type.
         */
        DELETE_PERSON_GROUP:            "deletePersonGroup",

        /**
         * The delete person group success event type.
         */
        DELETE_PERSON_GROUP_SUCCESS:    "deletePersonGroupSuccess",

        /**
         * The delete person group failure event type.
         */
        DELETE_PERSON_GROUP_FAILURE:    "deletePersonGroupFailure",
		
		/**
         * The read person groups event type.
         */
        READ_PERSON_GROUPS:            "readPersonGroups",

        /**
         * The read person groups success event type.
         */
        READ_PERSON_GROUPS_SUCCESS:    "readPersonGroupsSuccess",

        /**
         * The read person groups failure event type.
         */
        READ_PERSON_GROUPS_FAILURE:    "readPersonGroupsFailure"
		
    },

    /**
     * @property {Number} id [readOnly=false]
     * The id of a person group.
     */
    id: null,

    /**
     * @property {Core.model.person.group.Model} personGroup [readOnly=false]
     * A person group to perform CRUD actions on.
     */
    personGroup: null,

    /**
     * Constructor. 
     *
     * @param {String} type The event type.
     * @param {Number} id The id of the person group the CRUD operation is acting on.
     * @param {Core.model.person.group.Model} personGroup The person group the CRUD operation is acting on.     
     */
    constructor: function(type, id, personGroup) {
        this.callParent(arguments);

        this.id = id;
        this.personGroup = personGroup;
    }
});	