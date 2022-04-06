/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-06 20:51:07
 * @LastEditTime: 2022-04-06 20:54:53
 * @LastEditors: PhilRandWu
 */
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Class = sequelize.define('Class', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    openClass: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    createdAt: false,
    updatedAt: false,
    paranoid: true
});

module.exports = Class;
