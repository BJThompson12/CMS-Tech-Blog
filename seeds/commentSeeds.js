const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 4,
        comment_text: "This is amazing!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Wow, amazing work!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Awesome! VR will be so COOL!"
    },
    {
        user_id: 3,
        post_id: 1,
        comment_text: "I think upskilling is VERY importanat for developers"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "I enjoy using wireless charging on my devices."
    },
    {
        user_id: 3,
        post_id: 3,
        comment_text: "Social Media can be veru sneaky if you are not careful."
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "I stay away from Social Media because of Privacy concerns."
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "There is so much to learn in the Dev world!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;