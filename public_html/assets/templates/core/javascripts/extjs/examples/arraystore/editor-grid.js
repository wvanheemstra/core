/**
    * 3.0 Build the Grid (buildGrid)
    * 3.1 Create Handlers 
    * 3.2 Create (instantiate) the Grid 
    * 3.3 Render the Grid (make it lazy if you want) 
    * 3.4 Add listeners to the Grid 
    */
    
function buildGrid() {    
/*
        gridForm = new Ext.BasicForm(
            Ext.get("updategrid"),
            {
                
            }
        ); //end gridForm
*/            

        /**
         * 3.1. Create Handlers
         * Create functions to handle various events
         */

        /**
         * Function for Refreshing Grid
         */ 
        
function refreshGrid() {
            ds.reload();//
        }; // end refresh 

        /**
         * Handler for Adding a Record
         */
        
function addRecord() {
            var r = new myRecordObj({
                //specify default values
                companyID: 0,//use this to trigger special handling when updating 
                company: '', //you can't comment out this line if you want the editor
                             //to start there, as it will show the html tags
                price: 0.00,
                tax: 0.00,
                change: 0.00,
                pctChange: 0.00,
                lastChange: (new Date()).clearTime(),
                industry: '',
                risk: '',
                stars: '0',
                //newRecord:'yes',//use this to trigger special handling when updating
                //id: 0//this is not helpful, 
            });
            grid.stopEditing();//stops any acitve editing
            ds.insert(0, r); //1st arg is index,
                             //2nd arg is Ext.data.Record[] records
            //very similar to ds.add, with ds.insert we can specify the insertion point
            grid.startEditing(0, 1);//starts editing the specified rowIndex, colIndex
                                    //make sure you pick an editable location in the line above
                                    //otherwise it won't initiate the editor
        }; // end addRecord 

        
        //add an event to handle any updates to grid
        
        
        /**
         * Handler to control grid editing
         * @param {Object} oGrid_Event
         */
        
function handleEdit(editEvent) {
            var gridField = editEvent.field;//determine what column is being edited
            updateDB(editEvent);//start the process to update the db with cell contents
            
            //I don't want to wait for server update to update the Total Column
            if (gridField == 'price'){
                getTax(editEvent);//start the process to update the Tax Field
            }
        }
        
        /**
         * Function for updating database
         * @param {Object} oGrid_Event
         */
        function updateDB(oGrid_Event) {
            
            /*Do we need to disable a new record from further editing while the first request
              is being made since the record may not have the new companyID in time
              to use to properly handle other updates of the same record? 
              
              Dates come through as an object instead of a string or numerical
              value, so do a check to prep the new value for transfer to the
              server side script*/
            if (oGrid_Event.value instanceof Date)
            {   //format the value for easy insertion into MySQL
                var fieldValue = oGrid_Event.value.format('Y-m-d H:i:s');
            } else
            {
                var fieldValue = oGrid_Event.value;
            }    
                    
            //submit to server
            Ext.Ajax.request( //alternative to Ext.form.FormPanel? or Ext.BasicForm
                {   //specify options (note success/failure below that receives these same options)
                    waitMsg: 'Saving changes...',
                    //url where to send request
                    url: 'grid-editor-mysql-php.php', //url to server side script
                    //method: 'POST', //if specify params default is 'POST' instead of 'GET'
                    params: { //these will be available via $_POST or $_REQUEST:
                        task: "update", //pass task to do to the server script
                        key: primaryKey,//pass to server same 'id' that the reader used
                        keyID: oGrid_Event.record.data.companyID,//for existing records this is the unique id (we need this one to relate to the db)
                                                                 //we'll check this server side to see if it is a new record                    
                     //   bogusID: oGrid_Event.record.id,//for new records Ext creates a number here unrelated to the database
                     //   newRecord: isNewRecord,//pass the new Record status indicator to server for special handling
                        field: oGrid_Event.field,//the column name
                        value: fieldValue,//the updated value
                        originalValue: oGrid_Event.record.modified//the original value (oGrid_Event.orginalValue does not work for some reason)
                                                                  //this might(?) be a way to 'undo' changes other than by cookie?
                                                                  //when the response comes back from the server can we make an undo array?                         
                    },//end params
                    //the function to be called upon failure of the request (404 error etc, NOT success=false)
                    failure:function(response,options){
                        Ext.MessageBox.alert('Warning','Oops...');
                        //ds.rejectChanges();//undo any changes
                    },//end failure block                                      
                    success:function(response,options){
                        //Ext.MessageBox.alert('Success','Yeah...');
                        if(oGrid_Event.record.data.companyID == 0){
                            var responseData = Ext.util.JSON.decode(response.responseText);//passed back from server
                            var newID = responseData.newID;//extract the ID provided by the server
                            //oGrid_Event.record.id = newID;
                            oGrid_Event.record.set('newRecord','no');//reset the indicator since update succeeded
                            oGrid_Event.record.set('companyID',newID);//assign the id to the record
                            //note the set() calls do not trigger everything since you may need to update multiple fields for example
                            //so you still need to call commitChanges() to start the event flow to fire things like refreshRow()
                            ds.commitChanges();//commit changes (removes the red triangle which indicates a 'dirty' field)
                            //var whatIsTheID = oGrid_Event.record.modified;
                        } else {
                            ds.commitChanges();//commit changes (removes the red triangle which indicates a 'dirty' field)
                        }
                    }//end success block                                      
                 }//end request config
            ); //end request  
        }; //end updateDB 

        /**
         * Function for updating Tax shown in grid
         * @param {Object} oGrid_Event
         */
        
function getTax(oGrid_Event) {
            
            //submit to server
            Ext.Ajax.request( //alternative to Ext.form.FormPanel? or Ext.BasicForm
                {   //specify options (note success/failure below that receives these same options)
                    //waitMsg: 'Saving changes...',
                    //url where to send request
                    url: 'grid-editor-mysql-php.php', //url to server side script
                    //method: 'POST', //if specify params default is 'POST' instead of 'GET'
                    params: { //these will be available via $_POST or $_REQUEST:
                        task: "calcTax", //pass task to do to the server script
                        price: oGrid_Event.value//the updated value
                    },//end params
                    //the function to be called upon failure of the request
                    failure:function(response,options){
                        Ext.MessageBox.alert('Warning','Oops...');
                        //ds.rejectChanges();//undo any changes
                    },//end failure block                                      
                    success:function(response,options){
                        //Ext.MessageBox.alert('Success','Yeah...');
                        var responseData = Ext.util.JSON.decode(response.responseText);//passed back from server
                        var myTax = responseData.tax;//extract the value provided by the server
                        //oGrid_Event.record.data.tax = myTax;//assign the tax to the record
                        //oGrid_Event.record.tax= myTax;//assign the id to the record
                        oGrid_Event.record.set('tax',myTax);
                        ds.commitChanges();//commit changes (removes the red triangle which indicates a 'dirty' field)
                    }//end success block                                      
                 }//end request config
            ); //end request  
        }; //end getTax 

        
        /**
         * Handler for Deleting record(s)
         */ 
        
function handleDelete() {
            var selectedKeys = grid.selModel.selections.keys; //returns array of selected rows ids only
            if(selectedKeys.length > 0)
            {
                Ext.MessageBox.confirm('Message','Do you really want to delete selection?', deleteRecord);
            }
            else
            {
                Ext.MessageBox.alert('Message','Please select at least one item to delete');
            }//end if/else block
        }; // end handleDelete 

        /**
         * Function for Deleting record(s)
         * @param {Object} btn
         */ 
        
function deleteRecord(btn) {
            if(btn=='yes')
            {
                /* block if just want to remove 1 row
                var selectedRow = grid.getSelectionModel().getSelected();//returns record object for the most recently selected
                                                                     //row that is in data store for grid
                if(selectedRow){
                    ds.remove(selectedRow);
                } //end of block to remove 1 row
                */
                var selectedRows = grid.selModel.selections.items;//returns record objects for selected rows (all info for row)
                var selectedKeys = grid.selModel.selections.keys; //returns array of selected rows ids only

                //note we already did an if(selectedKeys) to get here

                
var encoded_keys = Ext.encode(selectedKeys);//encode array into json
                //submit to server
                Ext.Ajax.request( //alternative to Ext.form.FormPanel? or Ext.BasicForm.submit
                    {   //specify options (note success/failure below that receives these same options)
                        waitMsg: 'Saving changes...',
                        //url where to send request
                        url: 'grid-editor-mysql-php.php', //url to server side script
                        params: { //these will be available via $_POST or $_REQUEST:
                            task: "delete", //pass task to do to the server script
                            companyID: encoded_keys,//the unique id(s)
                            key: primaryKey//pass to server same 'id' that the reader used
                        },
                        /* you can also specify a callback (instead of or in addition to 
                        success/failure) for custom handling.  If you have success/failure
                        defined, those will fire before 'callback'.  This callback will fire
                        regardless of success or failure.*/
                        callback: function (options, success, response) {
                            if (success) { //success will be true if the request succeeded
                                Ext.MessageBox.alert('OK',response.responseText);//you won't see this alert if the next one pops up fast
                                var json = Ext.util.JSON.decode(response.responseText);
                                Ext.MessageBox.alert('OK',json.del_count + ' record(s) deleted.');//need to move this to an after
                                //event because it will fire before the grid is re-rendered (while the deleted row(s) are still there
                                //You could update an element on your page with the result 
                                //from the server (e.g.<div id='total'></div>)
                                //var total = Ext.get('total');
                                //total.update(json.sum);
                            } else {
                                Ext.MessageBox.alert('Sorry, please try again. [Q304]',response.responseText);
                            }
                        },
                        /* */
                        //the function to be called upon failure of the request (server script, 404, or 403 errors)
                        failure:function(response,options){
                            Ext.MessageBox.alert('Warning','Oops...');
                            //ds.rejectChanges();//undo any changes
                        },                                      
                        success:function(response,options){
                            //Ext.MessageBox.alert('Success','Yeah...');
                            ds.reload();//commit changes and remove the red triangle which indicates a 'dirty' field
                        }                                      
                     } //end Ajax request config
                );// end Ajax request initialization
            };//end if click 'yes' on button
        }; // end deleteRecord 
**
 * 3.2. Create (instantiate) the Grid
 * This creates the actual GUI for the Grid.
 * We specify here where, how, and when to render the Grid.
 */
//grid = new Ext.grid.GridPanel({ //to instantiate normal grid
        
grid = new Ext.grid.EditorGridPanel({ //to instantiate editor grid
    //el:'grid-example', //html element (id of the div) where the grid will be rendered
    //'renderTo' does the same as 'el', except eliminated the need to explicitly call render() 
    //renderTo: 'grid-example',//could also render it directly to document.body 
    iconCls: 'icon-grid',//we create our own css with a class called 'icon-grid'
    store: ds,       //the DataStore object to use (ds: is shorthand)
    colModel: getColumnModel(), //gets the ColumnModel object to use (cm: is shorthand)
    autoExpandColumn: 'company', //which column to stretch in width to fill up the grid width and not leave blank space
    //autoSizeColumns: true,//deprecated as of Ext2.0
    //Enable a Selection Model.  The Selection Model defines the selection behavior,
    //(single vs. multiple select, row or cell selection, etc.)
    selModel: new Ext.grid.RowSelectionModel({singleSelect:false}),//true to limit row selection to 1 row})
    //footer: true,
    height:350,//you must specify height or autoHeight
    //autoHeight:true,//autoHeight resizes the height to show all records
    width:740,
    title:'This is the Grid Title',
    clicksToEdit:2,//number of clicks to activate cell editor, default = 2        
    plugins:this.checkColumn,
    //frame:true,//add a frame around the grid; defaults to no frame 
    cellclick: function()
            {
                var record = grid.getStore().getAt(rowIndex); //get the record
                var fieldName = grid.getColumnModel().getDataIndex(columnIndex);//get field name
                var data = record.get(fieldName);
                Ext.MessageBox.alert('title','inside function');
                   //title: 'My Title Here',
                   //msg: 'outside the function...'
                   //fn: myCallBackFunction,//the callback function after the msg box is closed
                   //scope:this//scope of callback function   
            },
    stripeRows: true,//applies css classname to alternate rows, defaults to false
    //trackMouseOver: true,//highligts rows on mousever
    //Add a bottom bar      
    bbar: new Ext.PagingToolbar({
                pageSize: myNameSpace.myModule.perPage,//default is 20
                store: ds,
                displayInfo: true,//default is false (to not show displayMsg)
                displayMsg: 'Displaying topics {0} - {1} of {2}',
                emptyMsg: "No data to display",//display message when no records found
                items:[
                    '-', {
                    pressed: true,
                    enableToggle:true,
                    text: 'Show Preview',
                    cls: 'x-btn-text-icon details'
                    //toggleHandler: toggleDetails  
                }]
            }),
        //Add a top bar      
        tbar: [
                {
                    text: 'Add Record',
                    tooltip: 'Click to Add a row',
                    iconCls:'add', //we create our own css with a class called 'add'
                                   //custom class not included in ext-all.css by default
                    handler: addRecord //what happens when user clicks on it
                }, '-', //add a separator
                {
                    text: 'Delete Selected',
                    tooltip: 'Click to Delete selected row(s)',
                    handler: handleDelete, //what happens when user clicks on it
                    iconCls:'remove' //we create our own css with a class called 'add'
                }, '-', //add a separator
                {
                    text: 'Refresh',
                    tooltip: 'Click to Refresh the table',
                    handler: refreshGrid, //what happens when user clicks on it
                    iconCls:'refresh' //we create our own css with a class called 'add'
                }
            ],
        //this is the key to showing the GroupingStore
        view: new Ext.grid.GroupingView({
                forceFit:true,
                //custom grouping text template to display the number of items per group
                groupTextTpl: '{text} ({[values.rs.length]} {[values.rs.length > 1 ? "Items" : "Item"]})'
        }) /**/
    });//end grid
     
        // ## THIS DOES NOT WORK ## //
        /*  
        var rz = new Ext.Resizable("grid-example",{
            wrap:true,
            minHeight:100,
            pinned: true,
            handles:'all'
        });
        rz.on("resize", grid.autosize, grid);
        */ 

        /**
         * 3.3 Render the Grid (make it lazy if you want)
         * Explicitly rendering the grid is only required if "renderTo" is not specified
         * in the configuration of the grid object above.
         * In Ext2.0, every component automatically supports "lazy" (on demand) rendering.
         * The rendering pipeline is managed automatically if you use "renderTo" in the
         * grid constructor.  Instead of using "renderTo" you can explicitly render the grid
         * when you want using render(). This gives you the flexibility or power to control
         * the rendering process.  In addition to render() you can also use the beforerender()
         * event (see Ext.Component).
         * 3.4 Add listeners to the Grid
         */
        
grid.render('grid-example');//1st argument is the container, 2nd argument is the position within
                                    //the div (defaults to end of the container)
        
        /**
         * 3.4 Add listeners to the Grid
         */

        /**
         * Add right click event
         * rowcontextmenu fires when a row is right clicked
         */ 
        
grid.addListener('rowcontextmenu', onMessageContextMenu);

        
//callback function for the right click event 
        function onMessageContextMenu(grid, rowIndex, e) {
            e.stopEvent();
            var coords = e.getXY();
            var record = grid.getStore().getAt(rowIndex);//OK, we have our record, now how do we pass
                                                         //it to the referenced handler?

            
var messageContextMenu = new Ext.menu.Menu({
                id: 'messageContextMenu',
                items: [
                {
                    text: 'Properties',
                    handler: onMessageContextItemClick
                    //handler: showRecord(record)
                },
                {
                    text: 'I like Ext',
                    checked: true,       // when checked has a boolean value, it is assumed to be a CheckItem
                    checkHandler: onItemCheck
                }
                ]
            });
            
            //predefine a menu item
            var menuItem = new Ext.menu.Item({text: '<i>New Item</i>'});

             
//shows how to add items dynamically
            var item = messageContextMenu.add(
                '-',
                menuItem, //add item by reference
                {    
                    text: '<u>View in new tab</u>',
                    //handler: onMessageContextItemClick(this,['open']),
                    handler: function(){
                        this.viewer.openTab(this.ctxRecord);
                    },
                    iconCls:'add'
                },
                    {text: '<b>Print</b>', menu: new Ext.menu.Menu({// <-- submenu by nested config object
                        items: [
                            {text: 'PDF',  handler:function(){callPrintPreview("PDF");} },
                            {text: 'EXCEL',handler:function(){callPrintPreview("EXCEL ");} },
                            {text: 'HTML', handler:function(){callPrintPreview("HTML") ;} },
                            {text: 'WORD', handler:function(){callPrintPreview("WORD") ;} }
                        ]
                    })},
                    {text: '<b>Save Preferences</b>',handler: function(){saveUserPref(Ext.encode(colModel.config));}}
            );

            
messageContextMenu.showAt([coords[0], coords[1]]);
            e.preventDefault();//to disable the standard browser context menu
        }

        
/**
         * Handlers for right clicks
         */ 
        function onMessageContextItemClick(item) {
            //Ext.MessageBox.alert('Request','You selected the {0} menu item',item.text);
            Ext.MessageBox.alert('Request','You selected '+this.text);
        }; // end right click handler 

        
function onItemCheck(item, checked){
            Ext.example.msg('Item Check', 'You {1} the "{0}" menu item.', item.text, checked ? 'checked' : 'unchecked');
        }

        function 
SaveToExcel(item) {
            Ext.MessageBox.alert('Request','You selected '+this.text);
        }; 
        function callDelete(item) {
            Ext.MessageBox.alert('Request','You selected '+this.text);
        }; 
        function callTrade(item) {
            Ext.MessageBox.alert('Request','You selected '+this.text);
        }; 
        function callPrintPreview(item) {
            Ext.MessageBox.alert('Request','You selected '+this.text);
        }; 

        
/**
         * Add an event to handle any updates to grid
         */ 
        grid.addListener('afteredit', handleEdit);//give event name, handler (can use 'on' shorthand for addListener) 
        
        
        //instead of adding listeners individually could have also loaded together like so:   
        /*
        grid.addListener({  //same as saying grid.on
            'rowcontextmenu': onMessageContextMenu,
            'afteredit': handleEdit
            //note other listeners are same just without the 'on' (mousever, mouseout, click, etc.)
        });
        */

            
        /**
         * Grid rendering effects
         * if we want to render rows depending on values in row
         */ 
        
grid.getView().getRowClass = function(record, index) {
            switch (record.data.stars) {
                case '0': 
                //right now just keying off of stars = '0' to signify the row has
                //not been saved yet, might be better to key from when the 'id' is no longer zero
                //but for now I just chose the last column thinking that would be the last to get updated
                    return "yellowrow"
                    break
                case '5':
                    return "greenrow"
                    break
                case '4':
                    return "pinkrow"
                    break
                default:
                    //something else?
            }
        };//end row rendering

        // This line to highlight the first row of the grid is quite finicky.  There's probably
        // a better way to do this that is more reliable.  It seems like this next line may get
        // executed before the grid is rendered and may not fire depending on the timing.
        
grid.getSelectionModel().selectFirstRow();
    
        
    }//end function buildGrid

    
    /*--Private Area--*/
    /******************/
 
    /*****************/
    /*--Public Area--*/
    
return {//returns an object Ext.myNameSpace.module1 with the following methods:
        /*--Public Properties--*/
        // it's good practice to put the following in the public area of the module:
        //   text used by module, default dmensions, styles, customizable options, etc.
        myPublicProperty: "I'm accessible as myNameSpace.myModule.myPublicProperty.",
    
        perPage: 50, //page limit

        /*--Public Methods--*/
        //  Public methods can be called from outside
        //  Public methods can access Private Area
        
myPublicMethod: function(){//accessible as myNameSpace.myModule.myPublicMethod
            var myOtherProperty = this.myPublicProperty //use 'this' to refer to Public Property
            return myPrivateVar; //note reference to Private variable does NOT use 'this'
        },
        init : function(){ //this method is called by the last line below that looks like this:
                           //Ext.onReady(myNameSpace.myModule.init, myNameSpace.myModule, true);
                           //So once the document is fully loaded that line gets executed and we
                           //end up here.  As a result, this is a good place to put DOM dependent tasks 

            /* Put initialization code here */

            /**
             * Set up plugin for a check column
             * @param {Object} config
             */
            
Ext.grid.CheckColumn = function(config){
                this.addEvents({
                    click: true
                });
                Ext.grid.CheckColumn.superclass.constructor.call(this);
                
                Ext.apply(this, config, {
                    init : function(grid){
                        this.grid = grid;
                        this.grid.on('render', function(){
                            var view = this.grid.getView();
                            view.mainBody.on('mousedown', this.onMouseDown, this);
                        }, this);
                    },
                
                    onMouseDown : function(e, t){
                        if(t.className && t.className.indexOf('x-grid3-cc-'+this.id) != -1){
                            e.stopEvent();
                            var index = this.grid.getView().findRowIndex(t);
                            var record = this.grid.store.getAt(index);
                            record.set(this.dataIndex, !record.data[this.dataIndex]);
                            this.fireEvent('click', this, e, record);
                        }
                    },

                    
renderer : function(v, p, record){
                        var checkState = (+v) ? '-on' : '';//the +v type converts to a number (json returns a string which always evaluates true)
                        p.css += ' x-grid3-check-col-td'; 
                      //return '<div class="x-grid3-check-col'+(v?'-on':'')+' x-grid3-cc-'+this.id+'"> </div>';
                        return '<div class="x-grid3-check-col'+ checkState +' x-grid3-cc-'+this.id+'"> </div>';
                    }
                });
                
              if(!this.id){
                  this.id = Ext.id();
              }
              this.renderer = this.renderer.createDelegate(this);
            };
            
            Ext.extend(Ext.grid.CheckColumn, Ext.util.Observable);// extend Ext.util.Observable

            //done with plugin setup        
            /////////////////////////////////////////////////////////////////
    
    
             // get our Grid!
            
this.getMyGrid();// this = refers to properties and methods inside the public area
    
            // Works without this, used for state awareness...
            //Ext.state.Manager.setProvider(new Ext.state.CookieProvider());
        },//end of init
       
        /**
         * getMyGrid
         * Call after initialization to get our Grid
         */
        getMyGrid: function() {  
            Ext.QuickTips.init();// Enable Quicktips
            setupDataSource();
            buildGrid();
        },
        //a method we can call from Firebug console to check what is in our Data Store
        getDataSource: function() {  
            return ds;
        }
    }
    /*--Public Area--*/
    /*****************/
}(); /* End of application. Note the parentheses () — this notation causes the anonymous
        function to execute immediately, returning the object containing myPublicProperty 
        and myPublicMethod. As soon as the anonymous function returns, that returned object
        is addressable as myNameSpace.myModule.   */

// Since the above code has already executed, we can access the init method immediately:
Ext.onReady(myNameSpace.myModule.init, myNameSpace.myModule, true);
/* This line executes the myModule.init method after the document has been completely
   loaded. This line also sets the myModule.init method scope to myModule, which means
   you can call Public attributes (methods and properties) with a preceding 'this'.*/  