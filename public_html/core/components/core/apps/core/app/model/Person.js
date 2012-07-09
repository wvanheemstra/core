Ext.define('core.model.Person', {
    extend: 'Ext.data.Model',
	fields: [
		{name: 'kp_PersonID',  type: 'int'},
        {name: 'PersonFirstName',  type: 'string'},
        {name: 'PersonLastName',   type: 'string'},
        {name: 'kf_GenderID', type: 'int', defaultValue: '0'},
        {name: 'kf_Salutation', type: 'int', defaultValue: '0'}
    ],
    idProperty:'kp_PersonID'
});