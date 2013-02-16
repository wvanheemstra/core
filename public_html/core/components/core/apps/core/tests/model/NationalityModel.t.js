StartTest(function(t) {
	t.diag("Testing NationalityModel");
    t.requireOk('core.model.NationalityModel', function() {
        var mod = Ext.create('core.model.NationalityModel', {
			kp_NationalityID : '1',
            NationalityName : 'Dutch'
        });
        t.is(mod.idProperty, 'kp_NationalityID', 'Could read idProperty');
		t.is(mod.get('kp_NationalityID'), '1', 'Could read kp_NationalityID');
        t.is(mod.get('NationalityName'), 'Dutch', 'Could read NationalityName');
    });
});
