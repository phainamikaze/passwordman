var argv = require('yargs')
	.command('add','add new account', function (yargs){
		yargs.options({
			name:{
				demand: true,
				alias: 'n',
				description: 'your account (eg. Facebook Gmail)',
				type: 'string'
			},
			username:{
				demand: true,
				alias: 'u',
				description: 'your username',
				type: 'string'
			},
			password:{
				demand: true,
				alias: 'p',
				description: 'your password',
				type: 'string'
			},
		});
	}).help('help')
	.command('get','get account info', function (yargs){
		yargs.options({
			name:{
				demand:true,
				alias:'n',
				description: 'your account',
				type:'string'
			}
		});
	}).help('help')
	.help('help')
	.argv;


//console.log(argv);

