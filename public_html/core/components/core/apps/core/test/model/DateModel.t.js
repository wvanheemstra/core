StartTest(function(t) {
	t.diag("Testing DateModel");
    t.requireOk('core.model.DateModel', function() {
        var mod = Ext.create('core.model.DateModel', {
			kp_DateID : '1',
            DateStart : '1970-12-28', 
            DateFinish : '2012-12-30'
        });
        t.is(mod.idProperty, 'kp_DateID', 'Could read idProperty');
		t.is(mod.get('kp_DateID'), '1', 'Could read kp_DateID');
        t.isDateEqual(mod.get('DateStart'), new Date('1970-12-28'), 'Could read DateStart');
        t.isDateEqual(mod.get('DateFinish'), new Date('2012-12-30'), 'Could read DateFinish');
    });
});
