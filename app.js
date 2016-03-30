var storeage = require("node-persist");

storeage.initSync();

function createAccount(account){
	var accounts = storeage.getItemSync('account');
	if(typeof accounts === 'undefined'){
		accounts=[];
	}
	
	accounts.push(account);
	storeage.setItemSync('account',accounts);
	console.log('Account Create!!');
	console.log(account);
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


 // createAccount({
 // 	name:'google',
 // 	user:'phai_namikaze@hotmail.com',
	// pass:'11221122'

 // });

var gacc = getAccount('google');
console.log(gacc);