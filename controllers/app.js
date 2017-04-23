var conetable = require("console.table");
var inquirer = require('inquirer');

const creds = require('../models/batCreds');
var shop = require('./shopping');


// sudo code


var userLogin = {
    enter: function(){
        inquirer.prompt({
            name: 'user',
            type: 'input',
            message: 'Login: '
        }).then(function(answers){
            if(answers.user){
                shop.shoppingMachine.start();
                // shop.shoppingMachine.start();
            }else if(answers.user === 'Manager'){
                console.log('building functionality, please talk to ...');
            }else if(answers.user === 'supervisor'){
                console.log('building functionality, please talk to ...');
            }
        });
    },

};

userLogin.enter();



creds.connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + creds.connection.threadId);
    // shoppingMachine.start();

});


// 5
// create bamazonCustomer.js
// npm start
// available for sale. Include the ids, names, 
// and prices of products for sale.
// display inventory function
// start to shop



// 6 
// ask the id of the item
// ask the quantity	
// shoping mode


// 7
// check the quantity of items before continuing the trasaction
// inventory check function
// data validation ? inquirer


// 8
// update the mysql database
// update inventory
