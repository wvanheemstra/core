StartTest(function(t) {
	t.diag("Testing ContactModel");
    t.requireOk('core.model.ContactModel', function() {
        var mod = Ext.create('core.model.ContactModel', {
			kp_ContactID : '1',
            kf_KindOfContactID : '1', 
            ContactValue : 'foo',
			kf_MembershipID : '1'
        });
        t.is(mod.idProperty, 'kp_ContactID', 'Could read idProperty');
		t.is(mod.get('kp_ContactID'), '1', 'Could read kp_ContactID');
        t.is(mod.get('kf_KindOfContactID'), '1', 'Could read kf_KindOfContactID');
        t.is(mod.get('ContactValue'), 'foo', 'Could read ContactValue');
        t.is(mod.get('kf_MembershipID'), '1', 'Could read kf_MembershipID');
    });
});
