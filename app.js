var mysql = require("mysql");
var conetable = require("console.table");


// sudo code

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "Bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});




// 4
	// populate the data base with 10 items


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

