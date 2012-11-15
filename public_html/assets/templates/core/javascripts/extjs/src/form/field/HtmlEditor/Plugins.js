/**
 * @author Shea Frederick - http://www.vinylfox.com
 * @class Ext.form.field.HtmlEditor.plugins
 * <p>A convenience function that returns a standard set of HtmlEditor buttons.</p>
 * <p>Sample usage:</p>
 * <pre><code>
    new Ext.FormPanel({
        ...
        items : [{
            ...
            xtype           : "htmleditor",
            plugins         : Ext.form.field.HtmlEditor.plugins()
        }]
    });
 * </code></pre>
 */
Ext.form.field.HtmlEditor.plugins = function(){
    return [
        new Ext.form.field.HtmlEditor.Link(),
        new Ext.form.field.HtmlEditor.Divider(),
        new Ext.form.field.HtmlEditor.Word(),
        new Ext.form.field.HtmlEditor.FindAndReplace(),
        new Ext.form.field.HtmlEditor.UndoRedo(),
        new Ext.form.field.HtmlEditor.Divider(),
        new Ext.form.field.HtmlEditor.Image(),
        new Ext.form.field.HtmlEditor.Table(),
        new Ext.form.field.HtmlEditor.HR(),
        new Ext.form.field.HtmlEditor.SpecialCharacters(),
        new Ext.form.field.HtmlEditor.HeadingMenu(),
        new Ext.form.field.HtmlEditor.IndentOutdent(),
        new Ext.form.field.HtmlEditor.SubSuperScript(),
        new Ext.form.field.HtmlEditor.RemoveFormat()
    ];
};