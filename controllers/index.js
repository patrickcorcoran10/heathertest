const router = require('express').Router();
const apiRoutes = require('./api');
const { UserLibz, Madlibz } = require('../models');
//const Sequelize = require('sequelize')

router.use('/api', apiRoutes);

//pulls up localhost:3001/
router.get("/", (req, res) => {
  res.render('homepage', { loggedIn: req.session.loggedIn, } );
});

//pulls up localhost:3001/login
router.get("/login", (req, res) => {
res.render('login', { loggedIn: req.session.loggedIn, });
});

//pulls up localhost:3001/signup
router.get("/signup", (req, res) => {
res.render('signup', { loggedIn: req.session.loggedIn, });
});

router.get("/madlibz", async (req, res) => {
  res.render('madlibz', {loggedIn: req.session.loggedIn });
});

router.get("/saved", async (req,res) => {
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

    const savedLibz = dbUserLibz.map((post) => post.get({ plain: true }));

  res.render('saved', {savedLibz, loggedIn: req.session.loggedIn });
});

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;




