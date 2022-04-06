/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-06 21:00:05
 * @LastEditTime: 2022-04-06 21:01:36
 * @LastEditors: PhilRandWu
 */
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Book = sequelize.define('Book', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imgSrc: {
        type: DataTypes.STRING,
        allowNull: true
    },
    openBook: {
        type: DataTypes.DATE,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    createdAt: false,
    updatedAt: false,
    paranoid: true
});

module.exports = Book;
