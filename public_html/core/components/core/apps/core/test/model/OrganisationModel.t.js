StartTest(function(t) {
	t.diag("Testing OrganisationModel");
    t.requireOk('core.model.OrganisationModel', function() {
        var mod = Ext.create('core.model.OrganisationModel', {
			kp_OrganisationID : '1'
        });
        t.is(mod.idProperty, 'kp_OrganisationID', 'Could read idProperty');
		t.is(mod.get('kp_OrganisationID'), '1', 'Could read field kp_OrganisationID');
    });
});
