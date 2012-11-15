/**
 * @author Shea Frederick - http://www.vinylfox.com
 * @class Ext.form.field.HtmlEditor.Divider
 * @extends Ext.util.Observable
 * <p>A plugin that creates a divider on the HtmlEditor. Used for separating additional buttons.</p>
 */
Ext.form.field.HtmlEditor.Divider = Ext.extend(Ext.util.Observable, {
    // private
    init: function(cmp){
        this.cmp = cmp;
        this.cmp.on('render', this.onRender, this);
    },
    // private
    onRender: function(){
        this.cmp.getToolbar().addButton([new Ext.Toolbar.Separator()]);
    }
});
