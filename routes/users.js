const express = require ('');
const router = express.Router();
router.post();
// @route POST api/users signature
// @desc Register a user   description
// @access  Public
router.post('/',(req,res)=>{
    res.send('Register a user');
});
module.exports = router;
