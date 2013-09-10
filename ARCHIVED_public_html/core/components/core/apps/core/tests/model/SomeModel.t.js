StartTest(function(t) {

	t.diag("Testing SomeModel");
    t.requireOk('core.model.SomeModel', function() {
        var mod = Ext.create('core.model.SomeModel', {
            kp_SomeID : '1', 
        //    SomeText : 'Some text.'
        });
        mod.setSomeText('Some text.');

        t.is(mod.get('kp_SomeID'), '1', 'get(\'kp_SomeID\') works ok');
        t.is(mod.getSomeText(), 'Some text.', 'Could read getSomeText()');
    });
});
