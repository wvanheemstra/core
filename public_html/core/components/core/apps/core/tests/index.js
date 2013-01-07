var Harness = Siesta.Harness.Browser.ExtJS;

Harness.configure({
	title: 'Core Test Suite',
	preload: [
		'../../../../../../assets/templates/core/javascripts/extjs/resources/css/ext-all.css',
		'../../../../../../assets/templates/core/javascripts/extjs/ext-all-debug.js'
	]
});

Harness.start(
	'010_sanity.t.js',
	'020_basic.t.js'
);