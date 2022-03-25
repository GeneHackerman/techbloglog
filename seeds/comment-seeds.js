const { Comment } = require('../models');

const commentData = [{
        comment_text: "The new IronMan suit looks amazing!",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Why does Tony Stark not have tight security at his research labs???",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "I'm LOVING this JARVIS compared to Alexa!",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;