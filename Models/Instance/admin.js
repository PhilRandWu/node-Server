/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-06 20:42:47
 * @LastEditTime: 2022-04-08 21:21:09
 * @LastEditors: PhilRandWu
 */
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Admin = sequelize.define('Admin',
    {
        account: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
    createdAt: true,
    updatedAt: true,
    paranoid: true
});

module.exports = Admin;
