/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-06 20:55:16
 * @LastEditTime: 2022-04-09 19:54:42
 * @LastEditors: PhilRandWu
 */
const sequelize = require('../db');
const { DataTypes } = require('sequelize');
const moment = require('moment');

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
            allowNull: false,
            get() {
                return this.getDataValue('birthday').getTime();
            }
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.VIRTUAL,
            get() {
                const now = moment.utc();
                const old = moment.utc(this.birthday);
                return now.diff(old,'y');
            }
        }
    }, {
    createdAt: true,
    updatedAt: true,
    paranoid: true
})

module.exports = Student;
