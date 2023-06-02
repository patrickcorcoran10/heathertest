const router = require('express').Router();

const madlibzRoutes = require('./madlibz-routes');
const usercredsRoutes = require('./usercreds-routes');
const userlibzRoutes = require("./userlibz-routes")


router.use('/Usercreds', usercredsRoutes);
router.use('/Madlibz', madlibzRoutes);
router.use('/Userlibz', userlibzRoutes);


module.exports = router;