const { User } = require('../models');

const userData = [
    {
        username: "peter_parker",
        password: "p@ssword1"
    },
    {
        username: "steve_rodgers",
        password: "p@ssword2"
    },
    {
        username: "thor_odinson",
        password: "p@ssword3"
    },
    {
        username: "tony_stark",
        password: "p@ssword4"
    },
    {
        username: "king_kong",
        password: "p@ssword5"
    },
    {
        username: "bruce_wayne",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;