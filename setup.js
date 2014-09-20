angular.module('triangulate.setup', [])
.constant('Setup', {
	debug: 			false,
	
	// urls where your app (url), api and sites folder are publicly available
	url: 			'https://app.triangulate.io',
	api: 			'https://app.triangulate.io/api',
	sites: 			'http://sites.triangulate.io',
	site:			'http://{{friendlyId}}.triangulatecloud.com',
	terms:			'http://triangulate.io/page/terms-of-service',
	
	// default theme
	themeId: 		'simple',
	
	// branding
	logo: 			'images/triangulate-icon.png',
	icon: 			'images/triangulate-icon.png',
	brand: 			'triangulate',
	
	// default lanugage
	language: 		'en',

	// public keys
	stripePubKey:	'pk_live_YJQDzjalfdjT2ujVr5U9Z44O',
	
	// pascode used by create (must match value set in API)
	passcode: 		'',
	
	// app branding
	app:			'Triangulate',
	version:		'1.0',
	copy: 			'Made by Matthew Smith in Manchester, MO',
	email:			'matt@matthewsmith.com',
	
	//links
	pricingLink:	'http://triangulate.io/page/pricing'
	
});
