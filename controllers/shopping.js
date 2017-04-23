var inquirer = require('inquirer');




exports.shoppingMachine = {
    start: function() {
        inquirer.prompt({
            name: 'shop',
            type: 'confirm',
            message: 'Welcome usename, would you like to make a purchase?'
        }).then(function(answers) {
            if (answers.shop) {
                console.log('let me show you the shop');
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

// module.exports = shoppingMachine;