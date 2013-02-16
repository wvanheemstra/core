StartTest(function(t) {
	t.diag("Testing GroupModel");
    t.requireOk('core.model.GroupModel', function() {
        var mod = Ext.create('core.model.GroupModel', {
			kp_GroupID : '1',
            GroupName : 'Some Group', 
            isSelected : true,
			kf_KindOfGroupID : '1'
        });
        t.is(mod.idProperty, 'kp_GroupID', 'Could read idProperty');
		t.is(mod.get('kp_GroupID'), '1', 'Could read kp_GroupID');
        t.is(mod.get('GroupName'), 'Some Group', 'Could read GroupName');
        t.is(mod.get('isSelected'), true, 'Could read isSelected');
        t.is(mod.get('kf_KindOfGroupID'), '1', 'Could read kf_KindOfGroupID');
    });
});
