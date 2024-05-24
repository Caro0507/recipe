const{ Sequelize, DataTypes } = require('sequelize')
const db = require('./database.js')

const recipes = db.define('recipes', {
    id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING(255),
        allowNull:false,
        unique: true
    },
    description:{
        type: DataTypes.STRING,
        allowNull:false
    },
    ingredients:{
        type: DataTypes.STRING,
        allowNull:false
    },
    instructions:{
        type: DataTypes.STRING,
        allowNull:false
    },
    creationDate:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updateDate:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    }
});


module.exports = recipes