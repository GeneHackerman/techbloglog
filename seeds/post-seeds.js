const { Post } = require('../models');

const postData = [{
        title: 'Stark Industries Takes Off!',
        content: 'Tony Stark introduces the new IronMan mkIV suit!',
        user_id: 1

    },
    {
        title: 'IronMonger Steals Start Tech!',
        content: 'Supervillain IronMonger confirmed to have stolen many of Starks product files!',
        user_id: 2
    },
    {
        title: 'JARVIS Tech Goes Live!',
        content: 'Start Enterprises pushed out the new JARVIS home tech that will rival Amazons Alexa!',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;