/**
 * @author Shea Frederick - http://www.vinylfox.com
 * @class Ext.form.field.HtmlEditor.IndentOutdent
 * @extends Ext.form.field.HtmlEditor.MidasCommand
 * <p>A plugin that creates two buttons on the HtmlEditor for indenting and outdenting of selected text.</p>
 */
Ext.form.field.HtmlEditor.IndentOutdent = Ext.extend(Ext.form.field.HtmlEditor.MidasCommand, {
    // private
    midasBtns: ['|', {
        cmd: 'indent',
        tooltip: {
            title: 'Indent Text'
        },
        overflowText: 'Indent Text'
    }, {
        cmd: 'outdent',
        tooltip: {
            title: 'Outdent Text'
        },
        overflowText: 'Outdent Text'
    }]
});
