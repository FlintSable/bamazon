var conetable = require("console.table");
var inquirer = require('inquirer');


// sudo code


var userLogin = {
    enter: function() {
        inquirer.prompt({
            name: 'user',
            type: 'input',
            message: 'Login: '
        }).then(function(answers) {
            if (answers.user) {
                var shop = require('./shopping');
                shop.shopingMachine(answers.user);
            } else if (answers.user === 'Manager') {
                console.log('building functionality, please talk to ...');
            } else if (answers.user === 'supervisor') {
                console.log('building functionality, please talk to ...');
            }
        });
    },

};


userLogin.enter();


module.exports = userLogin;






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
