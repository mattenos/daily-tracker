const router = require('express').Router();
const Character = require('../Models/Character')
const sequelize = require('../config/connection');

// Home route to localhost:3001
router.get('/', (req, res) => {
    res.json('This route works');
});

// Checks to see if name, realm, region exists. Creates the character if it doesnt exist.
router.post('/character', async (req, res) => {
    const { name, realm, region } = (req.body)
    try {
        let characterData = await Character.findOne({
            where: {
                name,
                realm,
                region
            },
        })
        // if the character doesnt exist in the db, create new character
        if (!characterData) {
            characterData = await Character.create({ name, realm, region });
        }
        console.log(characterData);
        res.json(characterData)
    }
    catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;