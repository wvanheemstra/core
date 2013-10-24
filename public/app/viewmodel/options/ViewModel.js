glu.defModel('Core.assets.options', {
	alias:'widget.optionsViewModel',
    warnings : true,
    offMaintenanceWarning : false,
    missingWarning : false,

    offMaintenanceWarningIsEnabled$ : function(){
		console.log("offMaintenanceWarningIsEnabled$");	
        return this.warnings;
    },
    missingWarningIsEnabled$ : function(){
		console.log("missingWarningIsEnabled$");		
        return this.warnings;
    }
});