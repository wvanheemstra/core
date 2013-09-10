/**
 * @author Shea Frederick - http://www.vinylfox.com
 * @contributor vizcano - http://www.extjs.com/forum/member.php?u=23512
 * @class Ext.form.field.HtmlEditor.UndoRedo
 * @extends Ext.ux.form.HtmlEditor.MidasCommand
 * <p>A plugin that creates undo and redo buttons on the HtmlEditor. Incomplete.</p>
 */

Ext.form.field.HtmlEditor.UndoRedo = Ext.extend(Ext.form.field.HtmlEditor.MidasCommand, {
    // private
    midasBtns: ['|', {
        cmd: 'undo',
        tooltip: {
            title: 'Undo'
        },
        overflowText: 'Undo'
    }, {
        cmd: 'redo',
        tooltip: {
            title: 'Redo'
        },
        overflowText: 'Redo'
    }]
});
