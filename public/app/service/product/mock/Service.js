/**
 * The mock product service object.
 */
Ext.define("Core.service.product.mock.Service", {
    extend: "FlowMVC.mvc.service.mock.AbstractServiceMock",

    inject: [
        "logger"
    ],

    /**
     * The mock service call.
     */
    getProductSlide: function() {
        this.logger.debug("getProductSlide");

        var response = {
            success: true,
            productSlide: [
                { id: 0,    name: "Alfa" },
                { id: 1,    name: "Bravo" },
                { id: 2,    name: "Charlie" },
                { id: 3,    name: "Delta" },
                { id: 4,    name: "Echo" },
                { id: 5,    name: "Foxtrot" },
                { id: 6,    name: "Golf" },
                { id: 7,    name: "Hotel" },
                { id: 8,    name: "India" },
                { id: 9,    name: "Juliet" },
                { id: 10,   name: "Kilo" },
                { id: 11,   name: "Lima" },
                { id: 12,   name: "Mike" },
                { id: 13,   name: "November" },
                { id: 14,   name: "Oscar" },
                { id: 15,   name: "Papa" },
                { id: 16,   name: "Quebec" },                
                { id: 17,   name: "Romeo" },
                { id: 18,   name: "Sierra" },
                { id: 19,   name: "Tango" },
                { id: 20,   name: "Uniform" },              
                { id: 21,   name: "Victor" },
                { id: 22,   name: "Whiskey" },
                { id: 23,   name: "X-ray" },                
                { id: 24,   name: "Yankee" },
                { id: 25,   name: "Zulu" }
            ]
        };

        return this.delayedSuccess(response);
    },
    
    /**
     * The mock service call.
     */
    getProductList: function() {
        this.logger.debug("getProductList");

        var response = {
            success: true,
            productList: [
                { id: 0,    name: "Alfa" },
                { id: 1,    name: "Bravo" },
                { id: 2,    name: "Charlie" },
                { id: 3,    name: "Delta" },
                { id: 4,    name: "Echo" },
                { id: 5,    name: "Foxtrot" },
                { id: 6,    name: "Golf" },
                { id: 7,    name: "Hotel" },
                { id: 8,    name: "India" },
                { id: 9,    name: "Juliet" },
                { id: 10,   name: "Kilo" },
                { id: 11,   name: "Lima" },
                { id: 12,   name: "Mike" },
                { id: 13,   name: "November" },
                { id: 14,   name: "Oscar" },
                { id: 15,   name: "Papa" },
                { id: 16,   name: "Quebec" },                
                { id: 17,   name: "Romeo" },
                { id: 18,   name: "Sierra" },
                { id: 19,   name: "Tango" },
                { id: 20,   name: "Uniform" },              
                { id: 21,   name: "Victor" },
                { id: 22,   name: "Whiskey" },
                { id: 23,   name: "X-ray" },                
                { id: 24,   name: "Yankee" },
                { id: 25,   name: "Zulu" }
            ]
        };

        return this.delayedSuccess(response);
    },
    
    /**
     * The mock service call.
     */
    getProductTile: function() {
        this.logger.debug("getProductTile");

        var response = {
            success: true,
            productTile: [
                { id: 0,    name: "Alfa" },
                { id: 1,    name: "Bravo" },
                { id: 2,    name: "Charlie" },
                { id: 3,    name: "Delta" },
                { id: 4,    name: "Echo" },
                { id: 5,    name: "Foxtrot" },
                { id: 6,    name: "Golf" },
                { id: 7,    name: "Hotel" },
                { id: 8,    name: "India" },
                { id: 9,    name: "Juliet" },
                { id: 10,   name: "Kilo" },
                { id: 11,   name: "Lima" },
                { id: 12,   name: "Mike" },
                { id: 13,   name: "November" },
                { id: 14,   name: "Oscar" },
                { id: 15,   name: "Papa" },
                { id: 16,   name: "Quebec" },                
                { id: 17,   name: "Romeo" },
                { id: 18,   name: "Sierra" },
                { id: 19,   name: "Tango" },
                { id: 20,   name: "Uniform" },              
                { id: 21,   name: "Victor" },
                { id: 22,   name: "Whiskey" },
                { id: 23,   name: "X-ray" },                
                { id: 24,   name: "Yankee" },
                { id: 25,   name: "Zulu" }
            ]
        };

        return this.delayedSuccess(response);
    },
    
    /**
     * The mock service call.
     */
    createProduct: function(product) {
        this.logger.debug("createProduct");

        var response = {
            success: true,
            product: {
                id: this.getRandomInt(1000, 99999),
                name: product.name
            }
        };

        response = Ext.create("Core.model.product.Model", response.product);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    updateProduct: function(product) {
        this.logger.debug("updateProduct: id = ", product.id);

        var response = {
            success: true,
            product: {
                id: product.id,
                name: product.name
            }
        };

        response = Ext.create("Core.model.product.Model", response.product);
        return this.delayedSuccess(response);
    },

    /**
     * The mock service call.
     */
    deleteProduct: function(product) {
        this.logger.debug("deleteProduct: id = ", product.id);

        var response = {
            success: true,
            product: {
                id: product.id,
                name: product.name
            }
        };

        response = Ext.create("Core.model.product.Model", response.product);
        return this.delayedSuccess(response);
    }      
});