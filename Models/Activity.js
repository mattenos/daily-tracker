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
		description: {
			type: DataTypes.STRING,
		},
		type: {
			type: DataTypes.ENUM('daily','weekly','monthly')
		}
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