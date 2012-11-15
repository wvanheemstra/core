/**
 * @author Shea Frederick - http://www.vinylfox.com
 * @class Ext.form.field.HtmlEditor.RemoveFormat
 * @extends Ext.form.field.HtmlEditor.MidasCommand
 * <p>A plugin that creates a button on the HtmlEditor that will remove all formatting on selected text.</p>
 */
Ext.form.field.HtmlEditor.RemoveFormat = Ext.extend(Ext.form.field.HtmlEditor.MidasCommand, {
    midasBtns: ['|', {
        enableOnSelection: true,
        cmd: 'removeFormat',
        tooltip: {
            title: 'Remove Formatting'
        },
        overflowText: 'Remove Formatting'
    }]
});
