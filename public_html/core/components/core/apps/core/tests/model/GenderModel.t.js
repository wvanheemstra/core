StartTest(function(t) {
	t.diag("Testing GenderModel");
    t.requireOk('core.model.GenderModel', function() {
        var mod = Ext.create('core.model.GenderModel', {
			kp_GenderID : '1',
            GenderName : 'Male'
        });
        t.is(mod.idProperty, 'kp_GenderID', 'Could read idProperty');
		t.is(mod.get('kp_GenderID'), '1', 'Could read kp_GenderID');
        t.is(mod.get('GenderName'), 'Male', 'Could read GenderName');
    });
});
