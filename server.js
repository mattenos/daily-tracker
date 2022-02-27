const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./routes');
const path = require('path');

const app = express();

// const Character = require('./models/Character');
// const Activity = require('./models/Activity');

const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);



sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => {
		console.log(`Listening at ${PORT}`);
	});
});