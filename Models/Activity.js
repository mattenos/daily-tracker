const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Activity extends Model {}

Activity.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			unique: true
		},
		name: {
			type: DataTypes.STRING,
		},
	},
	{
		sequelize,
		timestamps: true,
		underscored: true,
		freezeTableName: true,
		modelName: 'activity',
	}
);

module.exports = Activity;