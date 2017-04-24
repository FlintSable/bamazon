var inquirer = require('inquirer');
var mysql = require("mysql");
require("console.table");


var con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon"

});
con.connect(function(err) {
    if (err) throw err;
});

exports.shopingMachine = function(user) {
    inquirer.prompt({
        name: 'shop',
        type: 'confirm',
        message: 'Welcome ' + user + ', would you like to make a purchase?\n'
    }).then(function(answers) {
        if (answers.shop) {
            // display items
            showShopData();
        } else {
            console.log('please select and option to proceede');
            // plese select an option to proceede
        }
    });
};

var showShopData = function() {
    var query = 'SELECT * FROM products';
    con.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        selectID(res.length);
    });
};


var selectID = function(itemIDLen) {
    inquirer.prompt([{
        name: 'ID',
        type: 'input',
        message: 'Please input the ID of the item you would like to purchase',
        validate: function(value) {
            if (isNaN(value) === false && (value <= itemIDLen) && (value != 0)) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        name: 'qty',
        message: 'Enter purchase quantity: ',
        validate: function(value) {
            if (isNaN(value) === false) {
                return true;
            } else {
                return false;
            }

        }
    }]).then(function(answers) {
        con.query('SELECT * FROM products WHERE ?', { id: answers.ID }, function(err, res) {
            if (answers.qty > res[0].stock_quantity) {
                console.log('itme is currently not avalible');
                con.end();
            } else {
                console.log('order will be processed');
                updateInventory(answers.qty, answers.ID);
            }
        });

    });

};

var updateInventory = function(qty, ID){

    updateOBJ = [{ stock_quantity: qty }, { item_id: ID }];
    query = 'UPDATE products SET ? WHERE ?';
    con.query(query, updateOBJ, function(err){
        console.log('something happend, you made a purchase');

    });
    
};  