/**
 * The company event contains data and event types to set the company.
 */
Ext.define("Core.event.company.Event", {
    extend: "FlowMVC.mvc.event.AbstractEvent",

    statics: {

        /**
         * The set company event type.
         */
        SET_COMPANY:          "setCompany",

        /**
         * The set company success event type.
         */
        SET_COMPANY_SUCCESS:  "setCompanySuccess",

        /**
         * The set company failure event type.
         */
        SET_COMPANY_FAILURE:  "setCompanyFailure"
    },

    /**
     * @property {String} company [readOnly=false]
     * The company property.
     */
    company: "",

    /**
     * Constructor.
     *
     * @param {String} type The event type.
     * @param {String} company The company being passed to set the company.
     */
    constructor: function(type, company) {
        this.callParent(arguments);

        this.company = company;
    }
});