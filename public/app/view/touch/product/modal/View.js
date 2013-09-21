/**
 * The modal of product view for the application.
 *
 * <p>
 * All views are purely layout and don't contain event handling,
 * application or business logic; this is all done in the view's corresponding mediator.
 * </p>
 */
 Ext.define("Core.view.touch.product.modal.View", {
    extend: "Core.view.touch.product.base.View",
    alias: "widget.productModalView",
    controller: "Core.mediator.touch.product.modal.Mediator",

    requires: [
        // empty
    ],
	
	config: {
		layout: {
			type: "fit"
		},
		src: 'about:blank',
		loadingText: 'Loading ...', // Make this dynamic
		// border: false,
		scroll : "vertical",
        items: [{
			xtype: "toolbar", // WAS "titlebar", BUT THAT FAILED
			itemId: "titlebar",
			ui: "neutral",
			docked: "top",
			//plugins: [  // TITLE IS SET DYNAMICALLY, MAKE locale SUITABLE FOR USE
			//	{
			//		type: "localization",
			//		method: "setTitle",
			//		key: "productModal.title"
			//	}
			//],
			items: [{
				xtype: "button",
				iconMask: true,
				iconCls: 'delete',
				itemId: "closeButton",
				align: "left",
				plugins: [
					{
						type: "localization",
						method: "setText",
						key: "productModal.close"
					}
				]
			},{
				xtype: 'image',
				width: 218,
				height: 44,	
				src:'/resources/logos/headerlogo.png',
				name: 'modalheader'
			}]
		},{
			xtype: "toolbar",
			itemId: "bottombar",
			ui: "neutral",
			docked: "bottom"
		}]
    },
	
	//initConfig: function(){
	//	console.log("initConfig");
		
	//},
	
	//initialize: function(){
	//	console.log("initialize");
    //   this.__init = false;		
	//	this.updateHTML();
	//	this.callParent(arguments);
		
    //    this.__init = true;		
	//},
	
	updateHTML: function() {
		console.log("updateHTML");
		this.html='<iframe id="iframe-'+this.id+'"'+
			' style="overflow:auto;width:100%;height:100%;"'+
			' frameborder="0" '+
			' src=""'+
			'></iframe>';
		this.setSrc(this.src);
	},
	reload: function() {
		console.log("reload");		
		this.setSrc(this.src);
	},
	reset: function() {	
		console.log("reset");		
		var iframe=this.getDOM();
		var iframeParent=iframe.parentNode;
		if (iframe && iframeParent) {
			iframe.src='about:blank';
			iframe.parentNode.removeChild(iframe);
		}
		iframe=document.createElement('iframe');
		iframe.frameBorder=0;
		iframe.src=this.src;
		iframe.id='iframe-'+this.id;
		iframe.style.overflow='auto';
		iframe.style.width='100%';
		iframe.style.height='100%';
		var titlebar = this.down("#titlebar");
		var titlebarHeight = titlebar.element.getHeight();
		var bottombar = this.down("#bottombar");
		var bottombarHeight = bottombar.element.getHeight();
		iframe.style.margin = titlebarHeight + ' 0 ' + bottombarHeight + ' 0';
		iframeParent.appendChild(iframe);
	},
	setSrc: function(src, loadingText){
		console.log("setSrc");
		if(loadingText){
			this.loadingText = loadingText;
		}
		this.src=src;
		var iframe=this.getDOM();
		if (iframe) {
		  iframe.src=src;
		}
	},
	getSrc: function() {
		console.log("getSrc");	
		return this.src;
	},	
	getDOM: function() {
		console.log("getDOM");		
		result = document.getElementById('iframe-'+this.id);
		if(result == null){
			var iframe=document.createElement('iframe');
			iframe.frameBorder=0;
			iframe.src=this.src;
			iframe.id='iframe-'+this.id;
			iframe.style.overflow='auto';
			iframe.style.width='100%';
			iframe.style.height='100%';
			var titlebar = this.down("#titlebar");
			var titlebarHeight = titlebar.element.getHeight();
			var bottombar = this.down("#bottombar");
			var bottombarHeight = bottombar.element.getHeight();
			iframe.style.margin = titlebarHeight + ' 0 ' + bottombarHeight + ' 0';
			Ext.get(this.id).appendChild(iframe);
			result = iframe;
		}
		return result;
	},
	getDocument: function() {	
		console.log("getDocument");		
		var iframe=this.getDOM();
		iframe = (iframe.contentWindow) ? iframe.contentWindow : (iframe.contentDocument.document) ? iframe.contentDocument.document : iframe.contentDocument;
		return iframe.document;
	},
	destroy: function() {
		console.log("destroy");		
		var iframe=this.getDOM();
		if (iframe && iframe.parentNode) {
		  iframe.src='about:blank';
		  iframe.parentNode.removeChild(iframe);
		}
		this.callParent(arguments);
	},
	update: function(content) {
		console.log("update");		
		this.setSrc('about:blank');
		try {
			var doc=this.getDocument();
			doc.open();
			doc.write(content);
			doc.close();
		} catch(err) {
			// reset if any permission issues
			this.reset();
			var doc=this.getDocument();
			if(doc){
				doc.open();
				doc.write(content);
				doc.close();
			}
		}
	}
});	