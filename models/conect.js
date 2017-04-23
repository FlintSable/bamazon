const creds = require('../models/batCreds');


creds.connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + creds.connection.threadId);
    // shoppingMachine.start();

});