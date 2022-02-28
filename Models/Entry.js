const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Entry extends Model {}

// Links the Character with the completed activities.
Entry.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			unique: true
		},
        date: {
            type: DataTypes.DATE,
        },
        activityId: {
            type: DataTypes.INTEGER,
        },
        characterId: {
            type: DataTypes.INTEGER,
        },
	},
	{
		sequelize,
		timestamps: true,
		underscored: true,
		freezeTableName: true,
		modelName: 'entry',
	}
);

module.exports = Entry;