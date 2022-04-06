/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-06 20:55:16
 * @LastEditTime: 2022-04-06 21:03:07
 * @LastEditors: PhilRandWu
 */
const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Student = sequelize.define('Student',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sex: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        birthday: {
            type: DataTypes.DATE,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        classID: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
    createdAt: false,
    updatedAt: false,
    paranoid: true
})

module.exports = Student;
