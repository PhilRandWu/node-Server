/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-06 21:41:30
 * @LastEditTime: 2022-04-07 17:36:10
 * @LastEditors: PhilRandWu
 */
const { where } = require('sequelize/types');
const Book = require('../../Models/Instance/book');

exports.addBook = async function (bookObj) {
    const ins = await Book.create(bookObj);
    return ins.toJSON();
}

exports.deleteBook = async function (id) {
    const result = await Book.destroy({
        where: {
            id
        }
    })
    return result;
}

exports.updateBook = async function (id, obj) {
    const result = await Book.update(obj, {
        where: {
            id
        }
    })
    return result;
}
