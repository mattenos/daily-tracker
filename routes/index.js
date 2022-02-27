const router = require('express').Router();
const Character = require('../Models/Character')
const Sequelize = require('../config/connection');

// Home route to localhost:3001
router.get('/', (req, res) => {
    res.json('This route works');
});

// Checks to see if name, realm, region exists. Creates the character if it doesnt exist.
router.post('/character', async (req, res) => {
    const { name, realm, region } = (req.body)
    try {
        // Sequelize documentation
        let [characterData, isNewCharacter] = await Character.findOrCreate({
            where: {
                name,
                realm,
                region
            },
        })
        // if (!characterData) {
        //     characterData = await Character.create({ name, realm, region });
        // }
        res.json(characterData)
    }
    catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;