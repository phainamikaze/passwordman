var storeage = require("node-persist");

storeage.initSync();
var argv = require('yargs')
	.usage('Usage: $0 <command> [options]')
	.command('add','add new account', function (yargs){
		return yargs.options({
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
		return yargs.options({
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



function createAccount(account){
	var accounts = storeage.getItemSync('account');
	if(typeof accounts === 'undefined'){
		accounts=[];
	}
	
	accounts.push(account);
	storeage.setItemSync('account',accounts);
	return account;
}

function getAccount(name){
	var accounts = storeage.getItemSync('account');
	var foundAccount;
	accounts.forEach(function(account){
		if(account.name===name){
			foundAccount = account;
			//break;
		}
	});
	return foundAccount;
}

function getAllAccount(){
	var accounts = storeage.getItemSync('account');
	return accounts;
}



var command = argv._[0];

if(command === 'add'){
	var acc = createAccount({
		name: argv.name,
		user: argv.username,
		pass: argv.password,

	});
	console.log('account added!');
	console.log(acc);
}else if(command === 'get'){
	var acc = getAccount(argv.name);
	console.log(acc);
}else if(command === 'getall'){
	console.log(getAllAccount());
}
