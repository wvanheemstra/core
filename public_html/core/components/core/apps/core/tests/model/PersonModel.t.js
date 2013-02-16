StartTest(function(t) {
	t.diag("Testing PersonModel");
    t.requireOk('core.model.PersonModel', function() {
        var mod = Ext.create('core.model.PersonModel', {
			kp_PersonID : '1',
            PersonFirstName : 'Slack', 
            PersonLastName : 'Jocum',
			kf_GenderID : '1',
			kf_SalutationID : '1',
			kf_NationalityID : '160',
			kf_DateID : '16'
        });
        t.is(mod.idProperty, 'kp_PersonID', 'Could read idProperty');
		t.is(mod.get('kp_PersonID'), '1', 'Could read kp_PersonID');
    //    t.is(mod.getPersonFirstName(), 'Slack', 'getPersonFirstName works ok');
        t.is(mod.get('PersonFirstName'), 'Slack', 'Could read PersonFirstName');
        t.is(mod.get('PersonLastName'), 'Jocum', 'Could read PersonLastName');
        t.is(mod.get('kf_GenderID'), '1', 'Could read kf_GenderID');
        t.is(mod.get('kf_SalutationID'), '1', 'Could read kf_SalutationID');
        t.is(mod.get('kf_NationalityID'), '160', 'Could read kf_NationalityID');
        t.is(mod.get('kf_DateID'), '16', 'Could read kf_DateID');
    });
});
