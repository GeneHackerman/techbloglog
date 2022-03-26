const { User } = require('../models');

const userData = [{
        username: 'IronMan',
        password: 'flash'

    },
    {
        username: 'Tony Stark',
        password: 'dasgood'
    },
    {   
        username: 'Captain America',
        password: 'stark'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;