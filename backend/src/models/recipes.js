const{ Sequelize, DataTypes } = require('sequelize')
const db = require('./database.js')
const recipes = db.define('recipes', {
    id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true
    },
    title: {
        type: Sequelize.TEXT,
        allowNull:false,
        unique: true
    },
    description:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    ingredients:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    instructions:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    picture:{
        type: Sequelize.TEXT,
        allowNull:false
    },
});

module.exports = recipes