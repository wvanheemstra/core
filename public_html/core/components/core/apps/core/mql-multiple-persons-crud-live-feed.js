Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath({
	'core': 'core/components/core/apps/core/app'
});

Ext.require([
	'core.model.Product'
]);

Ext.onReady(function () {

    var grid = Ext.create('Ext.grid.Panel', {
	    title: 'Products Grid',
	    itemId: 'gridpanel',
    	height: 400,
    	columnWidth: 0.60,
	    columns: colProducts,
        store: storeProducts,
        dockedItems: [
            toolbar
        ]        
    });

	var gridForm = Ext.create('Ext.form.Panel', {
	    frame: true,
	    title: 'Product Data',
	    bodyPadding: 5,
	    width: 750,
	    layout: 'column',    // Specifies that the items will now be arranged in columns

	    fieldDefaults: {
	        labelAlign: 'left'
	    },

	    items: [ grid,
	    {
	        columnWidth: 0.4,
	        margin: '0 0 0 10',
	        xtype: 'fieldset',
	        title:'Product Info',
	        defaults: {
	            width: 240,
	            labelWidth: 60
	        },
	        defaultType: 'textfield',
	        items: [
	        {
                 xtype:'hidden', // autoinc field, need presence for update 
                 name:'idProduct'	        	
	        },
	        {
	        	xtype: 'button',
	        	text: 'Add Product',
	        	handler: function(){
	        		var form = gridForm.getForm();

                    form.reset();
                    grid.getSelectionModel().clearSelections();

                    var newModel = Ext.ModelManager.create({},'core.model.Product');

                    form.loadRecord(newModel);

                    // update fields with new default values
                    form.setValues({
                        qty: 1,
                        rate: 100,
                        total: 1*100
                    });

                    // focus the desired field
                    var field = gridForm.down('#fieldProductName');
                    field.focus('',10);
	        	}
	        },
	        {
	            xtype: 'textfield',
	            itemId: 'fieldProductName',
	            fieldLabel: 'Name',
	            allowBlank: false,
	            name: 'productName'
	        },
	        {
	            name: 'qty',
	            xtype: 'numberfield',
	            fieldLabel: 'Qty',
	            width: 125
	        },
	        {
	            name: 'rate',
	            xtype: 'numberfield',
	            fieldLabel: 'Rate',
	            width: 125
	        },
	        {
	            name: 'total',
	            xtype: 'numberfield',
	            fieldLabel: 'Total',
	            width: 125
	        },
	        {
	        	xtype: 'button',
	        	text: 'Save Product',
	        	handler: function(){
	        		var form = gridForm.getForm();
                    if (form.isValid()) {
                    	// using record instead of submit; sending as object instead of url params
	                    var rec = form.getRecord();
	                    if (rec){ // only if there is a valid record defined; must add or select to edit
		                    rec.beginEdit();
		                    form.updateRecord(rec); // update record, next we need to commit changes!
		                    rec.save({ 
		                        params: { },
		                        success: function(record, operation) {
		                            if (operation.action === 'create'){
		                            	alert('You have added a '+record.data.productName)
		                            }
		                            grid.store.load(); // reload the store so insert is displays in correct order and latest records are available
		                        },
		                        failure: function(record, operation) {
		                            alert('ERROR: Unable to save record!');
		                        }
		                    });
		                    rec.endEdit();
		                    rec.commit(); // removes the dirty marker in grid if used
	                    } else {
	                    	alert('Please select a record to edit, or select Add Product');
	                    }
	                } else {
	                    // focus the desired field
	                    var field = gridForm.down('#fieldProductName');
	                    field.focus('',10);
	                }    
	        	}
	        }

	        ]
	    }],
	    renderTo: Ext.getBody()
	});

    grid.getSelectionModel().on('select', function(selModel, model, idx) {
    	var form = gridForm.getForm();
        form.loadRecord(model); // from record, no call to server
    }, this);

    storeProducts.on('load', function(store, model) {
 		grid.getSelectionModel().select(0);    	
    }, this);

});


