var mysql = require("mysql");
// questions

// did you put functions in different files
// all in one sheet
// sudo code
// how to display the mysql data for the use tosee 

// data base credentials
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "Bamazon"
});

// data base connection
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});



// 3
// create a table products
	// columbs 
	// item_id
	// product_name 
	// department_name
	// price cost
	// stock_quantity

// CREATE TABLE products (
//  id INT(255) NOT NULL,
//  product_name VARCHAR(100) NULL,
//  department_name VARCHAR(100) NULL,
//  price DECIMAL(10,4) NULL,
//  stock_quantity INT(1000) NULL,
//  PRIMARY KEY (id)
// );



// 4
// populate the data base with 10 items

// 5
// create bamazonCustomer.js
// npm start
// available for sale. Include the ids, names, 
// and prices of products for sale.



// 6 
// ask the id of the item
// ask the quantity

// 7
// check the quantity of items before continuing the trasaction

// 8
// update the mysql database