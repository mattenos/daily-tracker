const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./routes');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 6969;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

sequelize.sync({ force: true }).then(() => {
	app.listen(PORT, () => {
		console.log(`Listening at ${PORT}`);
	});
});