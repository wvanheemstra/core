StartTest(function(t) {
	t.diag("Testing PersonGroupModel");
    t.requireOk('core.model.PersonGroupModel', function() {
        var mod = Ext.create('core.model.PersonGroupModel', {
            kf_PersonID : '1', 
			kf_GroupID : '1'
        });
		t.is(mod.get('kf_PersonID'), '1', 'Could read field kf_PersonID');
        t.is(mod.get('kf_GroupID'), '1', 'Could read field kf_GroupID');
    });
});
