/**
 * The organisation group event contains data and event types to perform CRUD operations on organisation groups.
 */
Ext.define("Core.event.organisation.group.Event", {
    extend: "FlowMVC.mvc.event.AbstractEvent",
    
    statics: {	
		
        /**
         * The get organisation group event type.
         */
        GET_ORGANISATION_GROUP:               "getOrganisationGroup",

        /**
         * The get organisation group success event type.
         */
        GET_ORGANISATION_GROUP_SUCCESS:       "getOrganisationGroupSuccess",

        /**
         * The get organisation group failure event type.
         */
        GET_ORGANISATION_GROUP_FAILURE:       "getOrganisationGroupFailure",

        /**
         * The create organisation group event type.
         */
        CREATE_ORGANISATION_GROUP:            "createOrganisationGroup",

        /**
         * The create organisation group success event type.
         */
        CREATE_ORGANISATION_GROUP_SUCCESS:    "createOrganisationGroupSuccess",

        /**
         * The create organisation group failure event type.
         */
        CREATE_ORGANISATION_GROUP_FAILURE:    "createOrganisationGroupFailure",

        /**
         * The update organisation group event type.
         */
        UPDATE_ORGANISATION_GROUP:            "updateOrganisationGroup",

        /**
         * The update organisation group success event type.
         */
        UPDATE_ORGANISATION_GROUP_SUCCESS:    "updateOrganisationGroupSuccess",

        /**
         * The update organisation group failure event type.
         */
        UPDATE_ORGANISATION_GROUP_FAILURE:    "updateOrganisationGroupFailure",

        /**
         * The delete organisation group event type.
         */
        DELETE_ORGANISATION_GROUP:            "deleteOrganisationGroup",

        /**
         * The delete organisation group success event type.
         */
        DELETE_ORGANISATION_GROUP_SUCCESS:    "deleteOrganisationGroupSuccess",

        /**
         * The delete organisation group failure event type.
         */
        DELETE_ORGANISATION_GROUP_FAILURE:    "deleteOrganisationGroupFailure",
		
		/**
         * The read organisation groups event type.
         */
        READ_ORGANISATION_GROUPS:            "readOrganisationGroups",

        /**
         * The read organisation groups success event type.
         */
        READ_ORGANISATION_GROUPS_SUCCESS:    "readOrganisationGroupsSuccess",

        /**
         * The read organisation groups failure event type.
         */
        READ_ORGANISATION_GROUPS_FAILURE:    "readOrganisationGroupsFailure"
		
    },

    /**
     * @property {Number} id [readOnly=false]
     * The id of a organisation group.
     */
    id: null,

    /**
     * @property {Core.model.organisation.group.Model} organisationGroup [readOnly=false]
     * A organisation group to perform CRUD actions on.
     */
    organisationGroup: null,

    /**
     * Constructor. 
     *
     * @param {String} type The event type.
     * @param {Number} id The id of the organisation group the CRUD operation is acting on.
     * @param {Core.model.organisation.group.Model} organisationGroup The organisation group the CRUD operation is acting on.     
     */
    constructor: function(type, id, organisationGroup) {
        this.callParent(arguments);

        this.id = id;
        this.organisationGroup = organisationGroup;
    }
});	