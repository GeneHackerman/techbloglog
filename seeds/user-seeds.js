const { User } = require('../models');

const userData = [{
        id: 1,
        username: 'IronMan',
        password: 'flash'

    },
    {
        id: 2,
        username: 'Tony Stark',
        password: 'dasgood'
    },
    {   
        id: 3,
        username: 'Captain America',
        password: 'stark'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;