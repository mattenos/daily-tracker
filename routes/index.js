const router = require('express').Router();
const Character = require('../Models/Character')
const sequelize = require('../config/connection');

// localhost:3001/api/
router.get('/', (req, res) => {
    res.json('This route works');
});

router.post('/character', (req, res) => {
    const data = (req.body)
    console.log(Character);
});

module.exports = router;