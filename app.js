var mysql = require("mysql");
var conetable = require("console.table");
var inquirer = require('inquirer');


// sudo code

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "Bamazon"
});


// 4
// populate the data base with 10 items

var shoppingMachine = {
    start: function() {
        inquirer.prompt({
            name: 'shop',
            type: 'confirm',
            message: 'Welcome usename, would you like to meake a purchase?'
        }).then(function(answers) {
            if (answers.shop) {
                console.log('let show you the shop');
                // display items
            } else {
                console.log('please select and option to proceede');
                // plese select an option to proceede
            }
        });
    },
    showData: function() {
        console.log('showdata');
    }

};


connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    shoppingMachine.start();

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
