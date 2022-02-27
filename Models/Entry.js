const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Entry extends Model {}

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
		modelName: 'activity',
	}
);

module.exports = Entry;