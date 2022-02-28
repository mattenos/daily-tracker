const router = require('express').Router();
const Character = require('../Models/Character')
const Sequelize = require('../config/connection');
const activitiesJson = require('../seeds/activities.json');

// Home route to localhost:3001
router.get('/', (req, res) => {
    res.json('This route works');
});

// Checks to see if name, realm, region exists. Creates the character if it doesnt exist.
router.post('/character', async (req, res) => {
    const { name, realm, region } = (req.body)
    try {
        // Sequelize documentation to use findOrCreate instead of if statement. https://sequelize.org/master/manual/model-querying-finders.html. Allows us to return data as array.
        const [characterData, isNewCharacter] = await Character.findOrCreate({
            where: {
                name,
                realm,
                region
            },
        })
        res.json(characterData)
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// 
router.post('/entry', (req, res) => {
    const characterId = req.body.characterId;
    const completedActivityIds = req.body.completedActivityIds;
    console.log(characterId);
    console.log(completedActivityIds);
    completedActivityIds.forEach((activityId) => {
    }) 

})

// Forwarding the activities.json data
router.get('/activities', (req, res) => {
res.json(activitiesJson)
})


module.exports = router;