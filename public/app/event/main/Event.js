/**
 * The main event contains data and event types to perform CRUD operations on mains.
 */
Ext.define("Core.event.main.Event", {
    extend: "FlowMVC.mvc.event.AbstractEvent",
    
    statics: {

        /**
         * The get main slide event type.
         */
        GET_MAIN_SLIDE:          "getMainSlide",
    	
        /**
         * The get main slide success event type.
         */
        GET_MAIN_SLIDE_SUCCESS:  "getMainSlideSuccess",

        /**
         * The get main slide failure event type.
         */
        GET_MAIN_SLIDE_FAILURE:  "getMainSlideFailure",	
	
        /**
         * The get main list event type.
         */
        GET_MAIN_LIST:          "getMainList",
    	
        /**
         * The get main list success event type.
         */
        GET_MAIN_LIST_SUCCESS:  "getMainListSuccess",

        /**
         * The get main list failure event type.
         */
        GET_MAIN_LIST_FAILURE:  "getMainListFailure",
        
        /**
         * The get main tile event type.
         */
        GET_MAIN_TILE:          "getMainTile",
    	
        /**
         * The get main tile success event type.
         */
        GET_MAIN_TILE_SUCCESS:  "getMainTileSuccess",

        /**
         * The get main tile failure event type.
         */
        GET_MAIN_TILE_FAILURE:  "getMainTileFailure",        

        /**
         * The get main modal event type.
         */
        GET_MAIN_MODAL:          "getMainModal",
    	
        /**
         * The get main modal success event type.
         */
        GET_MAIN_MODAL_SUCCESS:  "getMainModalSuccess",

        /**
         * The get main modal failure event type.
         */
        GET_MAIN_MODAL_FAILURE:  "getMainModalFailure",	
		
        /**
         * The get main event type.
         */
        GET_MAIN:               "getMain",

        /**
         * The get main success event type.
         */
        GET_MAIN_SUCCESS:       "getMainSuccess",

        /**
         * The get main failure event type.
         */
        GET_MAIN_FAILURE:       "getMainFailure",

        /**
         * The create main event type.
         */
        CREATE_MAIN:            "createMain",

        /**
         * The create main success event type.
         */
        CREATE_MAIN_SUCCESS:    "createMainSuccess",

        /**
         * The create main failure event type.
         */
        CREATE_MAIN_FAILURE:    "createMainFailure",

        /**
         * The update main event type.
         */
        UPDATE_MAIN:            "updateMain",

        /**
         * The update main success event type.
         */
        UPDATE_MAIN_SUCCESS:    "updateMainSuccess",

        /**
         * The update main failure event type.
         */
        UPDATE_MAIN_FAILURE:    "updateMainFailure",

        /**
         * The delete main event type.
         */
        DELETE_MAIN:            "deleteMain",

        /**
         * The delete main success event type.
         */
        DELETE_MAIN_SUCCESS:    "deleteMainSuccess",

        /**
         * The delete main failure event type.
         */
        DELETE_MAIN_FAILURE:    "deleteMainFailure"
    },

    /**
     * @property {Number} id [readOnly=false]
     * The id of a main.
     */
    id: null,

    /**
     * @property {Skin.model.main.Model} main [readOnly=false]
     * A main to perform CRUD actions on.
     */
    main: null,

    /**
     * Constructor. Allows the username and password for authentication to be set on the event.
     *
     * @param {String} type The event type.
     * @param {Number} id The id of the main the CRUD operation is acting on.
     * @param {Skin.model.main.Model} main The main the CRUD operation is acting on.     
     */
    constructor: function(type, id, main) {
        this.callParent(arguments);

        this.id = id;
        this.main = main;
    }
})	