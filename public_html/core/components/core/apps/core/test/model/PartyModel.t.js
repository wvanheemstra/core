StartTest(function(t) {
	t.diag("Testing PartyModel");
    t.requireOk('core.model.PartyModel', function() {
        var mod = Ext.create('core.model.PartyModel', {
			kp_PartyID : '1'
        });
        t.is(mod.idProperty, 'kp_PartyID', 'Could read idProperty');
		t.is(mod.get('kp_PartyID'), '1', 'Could read field kp_PartyID');
    });
});
