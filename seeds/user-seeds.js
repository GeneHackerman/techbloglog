const { User } = require('../models');

const userData = [{
        username: 'IronMan',
        password: 'flash'

    },
    {
        username: 'TonyStark',
        password: 'dasgood'
    },
    {
        username: 'IronMonger',
        password: 'stark'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;