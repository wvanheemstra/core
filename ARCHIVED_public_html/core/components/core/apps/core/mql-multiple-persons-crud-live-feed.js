Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath({
	'core': 'core/components/core/apps/core/app'
});

Ext.require([
	'core.model.Product'
]);

Ext.onReady(function () {

	var personColumns = [
		{ dataIndex: 'kp_PersonID', header: 'ID', width: 50 },
		{ dataIndex: 'kf_SalutationID', header: 'Salutation', width: 60 },
		{ dataIndex: 'PersonFirstName', header: 'First Name', width: 75 },
		{ dataIndex: 'PersonLastName', header: 'Last Name', width: 125 },
		{ dataIndex: 'kf_GenderID', header: 'Gender', width: 60 },
		{ dataIndex: 'kf_NationalityID', header: 'Nationality', width: 60 },
		{ dataIndex: 'dummy', header: '', flex: 1 }
	];

    var grid = Ext.create('Ext.grid.Panel', {
	    title: 'Person Grid',
	    itemId: 'gridpanel',
    	height: 400,
    	columnWidth: 0.60,
	    columns: personColumns,
        store: storePersons,
        dockedItems: [
            toolbar
        ]        
    });

	var gridForm = Ext.create('Ext.form.Panel', {
	    frame: true,
	    title: 'Person Data',
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
	        title:'Person Info',
	        defaults: {
	            width: 240,
	            labelWidth: 60
	        },
	        defaultType: 'textfield',
	        items: [
	        {
                 xtype:'hidden', // autoinc field, need presence for update  
                 name:'kp_PersonID'				 
	        },
	        {
	        	xtype: 'button',
	        	text: 'Add Person',
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
                    var field = gridForm.down('#fieldPersonFirstName');					
                    field.focus('',10);
	        	}
	        },
			{
	            name: 'kf_SalutationID',
	            xtype: 'numberfield',
	            fieldLabel: 'Salutation',
	            width: 125
	        },
	        {
	            xtype: 'textfield',
	            itemId: 'fieldPersonFirstName',
	            fieldLabel: 'First Name',
	            allowBlank: false,
	            name: 'PersonFirstName'
	        },
	        {
	            xtype: 'textfield',
	            itemId: 'fieldPersonLastName',
	            fieldLabel: 'Last Name',
	            allowBlank: false,
	            name: 'PersonLastName'
	        },			
			{
	            name: 'kf_GenderID',
	            xtype: 'numberfield',
	            fieldLabel: 'Gender',
	            width: 125
	        },
			{
	            name: 'kf_NationalityID',
	            xtype: 'numberfield',
	            fieldLabel: 'Nationality',
	            width: 125
	        },
	        {
	        	xtype: 'button',
	        	text: 'Save Person',
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
		                            	alert('You have added '+record.data.PersonFirstName+' '+record.data.PersonLastName)
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
	                    	alert('Please select a record to edit, or select Add Person');
	                    }
	                } else {
	                    // focus the desired field
	                    var field = gridForm.down('#fieldPersonFirstName');
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

    storePersons.on('load', function(store, model) {
 		grid.getSelectionModel().select(0);    	
    }, this);

});


