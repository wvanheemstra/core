StartTest(function(t) {
	t.diag("Testing MembershipModel");
    t.requireOk('core.model.MembershipModel', function() {
        var mod = Ext.create('core.model.MembershipModel', {
			kp_MembershipID : '1',
            kf_PersonID : '1',
            kf_OrganisationID : '1',
			kf_MultimediaID : '1'
        });
        t.is(mod.idProperty, 'kp_MembershipID', 'Could read idProperty');
		t.is(mod.get('kp_MembershipID'), '1', 'Could read kp_MembershipID');
		t.is(mod.get('kf_PersonID'), '1', 'Could read kf_PersonID');
        t.is(mod.get('kf_OrganisationID'), '1', 'Could read kf_OrganisationID');
        t.is(mod.get('kf_MultimediaID'), '1', 'Could read kf_MultimediaID');
    });
});
