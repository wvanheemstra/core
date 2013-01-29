StartTest(function(t) {
    t.diag("Sanity test, loading classes on demand and verifying they were indeed loaded.")
    
    t.ok(Ext, 'ExtJS is here');

	var localHost = 'http://vanheemstrapictures.com';
	var remoteHost = 'http://vanheemstrapictures.com';

    t.requireOk('core.controller.Persons'); //was t.requireOk('AM.controller.Users');
    t.requireOk('core.model.PersonModel'); //was t.requireOk('AM.model.User');
    //t.requireOk('AM.store.Users');
    //t.requireOk('AM.view.user.Edit');
    //t.requireOk('AM.view.user.List');
})    
