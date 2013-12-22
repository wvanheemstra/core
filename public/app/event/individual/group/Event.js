/**
 * The individual group event contains data and event types to perform CRUD operations on individual groups.
 */
Ext.define("Core.event.individual.group.Event", {
    extend: "FlowMVC.mvc.event.AbstractEvent",
    
    statics: {	
		
        /**
         * The get individual group event type.
         */
        GET_INDIVIDUAL_GROUP:               "getIndividualGroup",

        /**
         * The get individual group success event type.
         */
        GET_INDIVIDUAL_GROUP_SUCCESS:       "getIndividualGroupSuccess",

        /**
         * The get individual group failure event type.
         */
        GET_INDIVIDUAL_GROUP_FAILURE:       "getIndividualGroupFailure",

        /**
         * The create individual group event type.
         */
        CREATE_INDIVIDUAL_GROUP:            "createIndividualGroup",

        /**
         * The create individual group success event type.
         */
        CREATE_INDIVIDUAL_GROUP_SUCCESS:    "createIndividualGroupSuccess",

        /**
         * The create individual group failure event type.
         */
        CREATE_INDIVIDUAL_GROUP_FAILURE:    "createIndividualGroupFailure",

        /**
         * The update individual group event type.
         */
        UPDATE_INDIVIDUAL_GROUP:            "updateIndividualGroup",

        /**
         * The update individual group success event type.
         */
        UPDATE_INDIVIDUAL_GROUP_SUCCESS:    "updateIndividualGroupSuccess",

        /**
         * The update individual group failure event type.
         */
        UPDATE_INDIVIDUAL_GROUP_FAILURE:    "updateIndividualGroupFailure",

        /**
         * The delete individual group event type.
         */
        DELETE_INDIVIDUAL_GROUP:            "deleteIndividualGroup",

        /**
         * The delete individual group success event type.
         */
        DELETE_INDIVIDUAL_GROUP_SUCCESS:    "deleteIndividualGroupSuccess",

        /**
         * The delete individual group failure event type.
         */
        DELETE_INDIVIDUAL_GROUP_FAILURE:    "deleteIndividualGroupFailure",
		
		/**
         * The read individual groups event type.
         */
        READ_INDIVIDUAL_GROUPS:            "readIndividualGroups",

        /**
         * The read individual groups success event type.
         */
        READ_INDIVIDUAL_GROUPS_SUCCESS:    "readIndividualGroupsSuccess",

        /**
         * The read individual groups failure event type.
         */
        READ_INDIVIDUAL_GROUPS_FAILURE:    "readIndividualGroupsFailure"
		
    },

    /**
     * @property {Number} id [readOnly=false]
     * The id of a individual group.
     */
    id: null,

    /**
     * @property {Core.model.individual.group.Model} individualGroup [readOnly=false]
     * A individual group to perform CRUD actions on.
     */
    individualGroup: null,

    /**
     * Constructor. 
     *
     * @param {String} type The event type.
     * @param {Number} id The id of the individual group the CRUD operation is acting on.
     * @param {Core.model.individual.group.Model} individualGroup The individual group the CRUD operation is acting on.     
     */
    constructor: function(type, id, individualGroup) {
        this.callParent(arguments);

        this.id = id;
        this.individualGroup = individualGroup;
    }
});	