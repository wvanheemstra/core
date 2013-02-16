StartTest(function(t) {
	t.diag("Testing SalutationModel");
    t.requireOk('core.model.SalutationModel', function() {
        var mod = Ext.create('core.model.SalutationModel', {
			kp_SalutationID : '1',
            SalutationAbbreviation : 'Mr'
        });
        t.is(mod.idProperty, 'kp_SalutationID', 'Could read idProperty');        
		t.is(mod.get('kp_SalutationID'), '1', 'Could read field kp_SalutationID');
        t.is(mod.get('SalutationAbbreviation'), 'Mr', 'Could read field SalutationAbbreviation');
    });
});
