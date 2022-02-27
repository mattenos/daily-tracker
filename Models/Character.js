const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Character extends Model {}

Character.init(
	{
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
		characterName: {
			type: DataTypes.STRING,
            allowNull: false,
		},
		realm: {
			type: DataTypes.STRING,
            allowNull: false,
		},
		region: {
			type: DataTypes.STRING,
            allowNull: false,
		},
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        }
	},
	{
		sequelize,
		timestamps: true,
		underscored: true,
		freezeTableName: true,
		modelName: 'character',
	}
);

module.exports = Character;