const router = require('express').Router();

// localhost:3001/api/
router.get('/', (req, res) => {
    res.json('please work');
});

module.exports = router;