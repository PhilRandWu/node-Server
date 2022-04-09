/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-06 21:41:30
 * @LastEditTime: 2022-04-09 15:27:52
 * @LastEditors: PhilRandWu
 */
const Book = require('../Models/Instance/book');

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

exports.getByID = async function (id) {
    const result = await Book.findByPk(id);
    if (result) {
        return result.toJSON();
    }
    return null;
}

exports.getBooks = async function (page = 1, limit = 10, keywords = '') {
    const result = Book.findAndCountAll({
        attributes: ['name', 'imgSrc', 'openBook', 'author'],
        where: {
            [Op.or]: [
                //里面的两个条件是或者关系
                {
                    //条件1：姓名模糊匹配关键词
                    name: {
                        [Op.like]: `%${keywords}%`,
                    },
                },
                {
                    //条件2：作者模糊匹配关键词
                    author: {
                        [Op.like]: `%${keywords}%`,
                    },
                },
            ]
        },
        offset: (page - 1) * limit,
        limit: +limit
    });
    return {
        total: (await result).count,
        data: JSON.parse(JSON.stringify((await result).rows))
    }
}
