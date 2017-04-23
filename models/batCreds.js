var mysql = require("mysql");

// how would you provide different user credentials
// for different access rights

// module.exports.creds = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "password",
//     database: "Bamazon"
// });

module.exports.connect = function() {

    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "password",
        database: "Bamazon"

    });

    connection.connect(function(err) {
        if (err) throw err;
        // console.log("connected as id " + connection.connection.threadId);
        // shoppingMachine.start();

    });
};
