const router = require('express').Router();
const Character = require('../Models/Character')
const Sequelize = require('../config/connection');
const activitiesJson = require('../seeds/activities.json');
const Entry = require('../Models/Entry')

// Checks to see if name, realm, region exists. Creates the character if it doesnt exist.
router.post('/character', async (req, res) => {
    const { name, realm, region } = (req.body)
    try {
        // Sequelize documentation to use findOrCreate instead of 'if' statement. https://sequelize.org/master/manual/model-querying-finders.html. Allows us to return data as array.
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

// AT THE MOMENT CREATING ENTRIES, BUT ALSO CREATING DUPLICATES
// NEED TO BE QUERIED WHEN CHARACTER IS LOGGED IN TO POPULATE THE CHECKLIST OF ACTIVITIES IN CASE THEY LOG IN MORE THAN ONCE A DAY
// Post the completed entries(activity IDs and character ID) to the db
router.post('/entry', (req, res) => {
    Entry.bulkCreate(req.body).then((results) => console.log(results))
})

// Forwarding the activities.json data
router.get('/activities', (req, res) => {
    res.json(activitiesJson)
})


module.exports = router;