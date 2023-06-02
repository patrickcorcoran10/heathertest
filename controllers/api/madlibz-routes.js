const router = require('express').Router();
const { Madlibz, UserLibz, UserCreds } = require('../../models');
const sequelize = require("../../config/connection");

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min)
};


router.get("/", (req, res) => {
  try {
    const rando = getRandomInt(1, 4);
    console.log("rando", rando)
  
    Madlibz.findByPk(rando).then(results => {
        res.status(200).json(results);
      })
  } catch (err) {
    res.status(500).json(err)
  }
});

router.post("/", async (req, res) => {
  const { title, content } = req.body;
  try {
    const newMadlibz = await Madlibz.create({ title, content });
    let madlibz_id = newMadlibz.dataValues.id;
    let usercreds_id = req.session.user_id;
    console.log(madlibz_id, usercreds_id);

    const newUserLibz = await UserLibz.create({ madlibz_id, usercreds_id })
    
    res.status(201).json(newMadlibz);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/saved", async (req, res) => {
  try {
    const dbUserLibz = await UserLibz.findAll(
    {
      include: 
      [
        { 
          model: Madlibz 
        }
      ],
      where: { usercreds_id: req.session.user_id }
    });

    res.status(200).json(dbUserLibz);
  } catch (err) {
    res.status(500).json(err);
  }
})


module.exports = router;
