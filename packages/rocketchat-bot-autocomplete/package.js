Package.describe({
	name: 'rocketchat:bot-autocomplete',
	version: '0.0.1',
	summary: 'Message pre-processor that will translate /leave commands',
	git: ''
});

Package.onUse(function(api) {
	api.versionsFrom('1.0');

	api.use([
		'coffeescript',
		'rocketchat:lib@0.0.1'
	]);

	api.addFiles('main.coffee');
	api.addFiles('server/methods/botAutoComplete.coffee');
	api.addAssets('client/views/messagePopupBotAutoComplete.html', 'client');
});

Package.onTest(function(api) {

});