const { UserLibz } = require("../models/");

const userLibzData = [
    {
        madlibz_id: 1,
        usercreds_id: 2
    },
    {
        madlibz_id: 1,
        usercreds_id: 2
    }
];

const seedUserLibz = () => UserLibz.bulkCreate(userLibzData);

module.exports = seedUserLibz;