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
                { id: 0,    ProductName: "Alfa" },
                { id: 1,    ProductName: "Bravo" },
                { id: 2,    ProductName: "Charlie" },
                { id: 3,    ProductName: "Delta" },
                { id: 4,    ProductName: "Echo" },
                { id: 5,    ProductName: "Foxtrot" },
                { id: 6,    ProductName: "Golf" },
                { id: 7,    ProductName: "Hotel" },
                { id: 8,    ProductName: "India" },
                { id: 9,    ProductName: "Juliet" },
                { id: 10,   ProductName: "Kilo" },
                { id: 11,   ProductName: "Lima" },
                { id: 12,   ProductName: "Mike" },
                { id: 13,   ProductName: "November" },
                { id: 14,   ProductName: "Oscar" },
                { id: 15,   ProductName: "Papa" },
                { id: 16,   ProductName: "Quebec" },                
                { id: 17,   ProductName: "Romeo" },
                { id: 18,   ProductName: "Sierra" },
                { id: 19,   ProductName: "Tango" },
                { id: 20,   ProductName: "Uniform" },              
                { id: 21,   ProductName: "Victor" },
                { id: 22,   ProductName: "Whiskey" },
                { id: 23,   ProductName: "X-ray" },                
                { id: 24,   ProductName: "Yankee" },
                { id: 25,   ProductName: "Zulu" }
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
                { id: 0,    ProductName: "Alfa" },
                { id: 1,    ProductName: "Bravo" },
                { id: 2,    ProductName: "Charlie" },
                { id: 3,    ProductName: "Delta" },
                { id: 4,    ProductName: "Echo" },
                { id: 5,    ProductName: "Foxtrot" },
                { id: 6,    ProductName: "Golf" },
                { id: 7,    ProductName: "Hotel" },
                { id: 8,    ProductName: "India" },
                { id: 9,    ProductName: "Juliet" },
                { id: 10,   ProductName: "Kilo" },
                { id: 11,   ProductName: "Lima" },
                { id: 12,   ProductName: "Mike" },
                { id: 13,   ProductName: "November" },
                { id: 14,   ProductName: "Oscar" },
                { id: 15,   ProductName: "Papa" },
                { id: 16,   ProductName: "Quebec" },                
                { id: 17,   ProductName: "Romeo" },
                { id: 18,   ProductName: "Sierra" },
                { id: 19,   ProductName: "Tango" },
                { id: 20,   ProductName: "Uniform" },              
                { id: 21,   ProductName: "Victor" },
                { id: 22,   ProductName: "Whiskey" },
                { id: 23,   ProductName: "X-ray" },                
                { id: 24,   ProductName: "Yankee" },
                { id: 25,   ProductName: "Zulu" }
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
                { id: 0,    ProductName: "Alfa" },
                { id: 1,    ProductName: "Bravo" },
                { id: 2,    ProductName: "Charlie" },
                { id: 3,    ProductName: "Delta" },
                { id: 4,    ProductName: "Echo" },
                { id: 5,    ProductName: "Foxtrot" },
                { id: 6,    ProductName: "Golf" },
                { id: 7,    ProductName: "Hotel" },
                { id: 8,    ProductName: "India" },
                { id: 9,    ProductName: "Juliet" },
                { id: 10,   ProductName: "Kilo" },
                { id: 11,   ProductName: "Lima" },
                { id: 12,   ProductName: "Mike" },
                { id: 13,   ProductName: "November" },
                { id: 14,   ProductName: "Oscar" },
                { id: 15,   ProductName: "Papa" },
                { id: 16,   ProductName: "Quebec" },                
                { id: 17,   ProductName: "Romeo" },
                { id: 18,   ProductName: "Sierra" },
                { id: 19,   ProductName: "Tango" },
                { id: 20,   ProductName: "Uniform" },              
                { id: 21,   ProductName: "Victor" },
                { id: 22,   ProductName: "Whiskey" },
                { id: 23,   ProductName: "X-ray" },                
                { id: 24,   ProductName: "Yankee" },
                { id: 25,   ProductName: "Zulu" }
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
                ProductName: product.name
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
                ProductName: product.name
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
                ProductName: product.name
            }
        };

        response = Ext.create("Core.model.product.Model", response.product);
        return this.delayedSuccess(response);
    }      
});