const router = require('express').Router();
const { UserLibz } = require('../../models');
const sequelize = require("../../config/connection");

router.get("/", async (req, res) => {
    try {
        sequelize.query(`SELECT * FROM userlibz`)
            .then(results => {
                res.status(200).json(results)
            })
    } catch (err) {
        res.status(500).json(err)
    }
});

router.post("/", async (req, res) => {
    try {
        const newUserlib = await UserLibz.create({
            title: req.body.title,
            content: req.body.content,
            lib_creater: req.body.lib_creater,
            user_cred_id: req.body.user_cred_id
        });
        res.status(200).json(newUserlib);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;