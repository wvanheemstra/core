/**
 * core.view.GroupGrid
 * @extends Ext.grid.Panel
 *
 * Shows a list of available group. Also has the ability to add/remove and load groups.
 *
 * @constructor
 * Create a new Group Grid
 * @param {Object} config The config object
 */
Ext.define('core.view.GroupGrid', {
    extend: 'Ext.grid.Panel',
	alias : 'widget.groupgrid',
	// override
	initComponent: function() {
		Ext.apply(this, {
            items: this.createView(),
            dockedItems: this.createToolbar()
        });
		this.createMenu();
		this.addEvents(
			/**
             * @event groupremove Fired when a group is removed
             * @param {GroupGrid} this
             * @param {String} title The title of the group
             * @param {String} url The url of the group
             */
			'groupremove',
			/**
             * @event groupselect Fired when a group is selected
             * @param {GroupGrid} this
             * @param {String} title The title of the group
             * @param {String} url The url of the group
             */
			'groupselect'
		);
		this.title = 'Group Grid';
		this.animCollapse = true;
		this.layout = 'fit';
		this.gridId = 'groupGrid';
		this.columns = groupColumns(2);
		// finally call the superclasses implementation
		//core.view.GroupGrid.superclass.initComponent.call(this);
		this.callParent(arguments);
	},
	createView: function(){
		this.view = Ext.create('widget.dataview', {
            store: Ext.create('Ext.data.Store', {
                model: 'Group',
                data: this.groups		
			}),
            selModel: {
                mode: 'SINGLE',
                listeners: {
                    scope: this,
                    selectionchange: this.onSelectionChange
                }
            },			
            listeners: {
                scope: this,
                contextmenu: this.onContextMenu,
                viewready: this.onViewReady
            },			
            trackOver: true,
            cls: 'group-list',
            itemSelector: '.group-list-item',
            overItemCls: 'group-list-item-hover',
            tpl: '<tpl for="."><div class="group-list-item">{title}</div></tpl>'
		});
		return this.view;
	},
	onViewReady: function(){
		this.view.getSelectionModel().select(this.view.store.first());
	},
    /**
     * Creates the toolbar to be used for controlling groups.
     * @private
     * @return {Ext.toolbar.Toolbar}
     */	
    createToolbar: function(){
        this.createActions();
        this.toolbar = Ext.create('widget.toolbar', {
            items: [this.addAction, this.removeAction]
        });
        return this.toolbar;
    },
    /**
     * Create actions to share between toolbar and menu
     * @private
     */
    createActions: function(){
        this.addAction = Ext.create('Ext.Action', {
            scope: this,
            handler: this.onAddGroupClick,
            text: 'Add group',
            iconCls: 'group-add'
        });
        this.removeAction = Ext.create('Ext.Action', {
            itemId: 'remove',
            scope: this,
            handler: this.onRemoveGroupClick,
            text: 'Remove group',
            iconCls: 'group-remove'
        });
    },
    /**
     * Create the context menu
     * @private
     */
    createMenu: function(){
        this.menu = Ext.create('widget.menu', {
            items: [{
                scope: this,
                handler: this.onLoadClick,
                text: 'Load group',
                iconCls: 'group-load'
            }, this.removeAction, '-', this.addAction],
            listeners: {
                hide: function(c){
                    c.activeGroup = null;
                }
            }
        });
    },
    /**
     * Used when view selection changes so we can disable toolbar buttons.
     * @private
     */
    onSelectionChange: function(){
        var selected = this.getSelectedItem();
        this.toolbar.getComponent('remove').setDisabled(!selected);
        this.loadGroup(selected);
    },
    /**
     * React to the load group menu click.
     * @private
     */
    onLoadClick: function(){
        this.loadGroup(this.menu.activeGroup);
    },	
    /**
     * Loads a group.
     * @private
     * @param {Ext.data.Model} rec The group
     */
    loadGroup: function(rec){
        if (rec) {
            this.fireEvent('groupselect', this, rec.get('title'), rec.get('url'));
        }
    },	
    /**
     * Gets the currently selected record in the view.
     * @private
     * @return {Ext.data.Model} Returns the selected model. false if nothing is selected.
     */
    getSelectedItem: function(){
        return this.view.getSelectionModel().getSelection()[0] || false;
    },	
    /**
     * Listens for the context menu event on the view
     * @private
     */
    onContextMenu: function(view, index, el, event){
        var menu = this.menu;

        event.stopEvent();
        menu.activeGroup = view.store.getAt(index);
        menu.showAt(event.getXY());
    },
    /**
     * React to a group being removed
     * @private
     */
    onRemoveGroupClick: function(){
        var active = this.menu.activeGroup || this.getSelectedItem();


        this.animateNode(this.view.getNode(active), 1, 0, {
            scope: this,
            afteranimate: function(){
                this.view.store.remove(active);
            }
        });
        this.fireEvent('groupremove', this, active.get('title'), active.get('url'));

    },
    /**
     * React to a group attempting to be added
     * @private
     */
    onAddGroupClick: function(){
        var win = this.addGroupWindow || (this.addGroupWindow = Ext.create('widget.groupwindow', {
            listeners: {
                scope: this,
                groupvalid: this.onGroupValid
            }
        }));
        win.form.getForm().reset();
        win.show();
    },
    /**
     * React to a validation on a group passing
     * @private
     * @param {GroupViewer.GroupWindow} win
     * @param {String} title The title of the group
     * @param {String} url The url of the group
     */
    onGroupValid: function(win, title, url){
        var view = this.view,
            store = view.store,
            rec;

        rec = store.add({
            url: url,
            title: title
        })[0];
        this.animateNode(view.getNode(rec), 0, 1);
    },	
    /**
     * Animate a node in the view when it is added/removed
     * @private
     * @param {Mixed} el The element to animate
     * @param {Number} start The start opacity
     * @param {Number} end The end opacity
     * @param {Object} listeners (optional) Any listeners
     */
    animateNode: function(el, start, end, listeners){
        Ext.create('Ext.fx.Anim', {
            target: Ext.get(el),
            duration: 500,
            from: {
                opacity: start
            },
            to: {
                opacity: end
            },
            listeners: listeners
         });
    },	
    // Inherit docs
    onDestroy: function(){
        this.callParent(arguments);
        this.menu.destroy();
    }
});

var groupColumns = function (finish, start) {
	var columns = [
		{ dataIndex: 'kp_GroupID', header: 'ID', width: 50, filter: {type: 'numeric', disabled: false}, renderer: 'ID' },
		{ dataIndex: 'GroupName', header: 'Group', flex: 1, filter: {type: 'numeric', disabled: false}, renderer: 'GroupName'  }	
	];
	return columns.slice(start || 0, finish);
};