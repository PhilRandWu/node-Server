/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-07 17:28:32
 * @LastEditTime: 2022-04-09 15:34:52
 * @LastEditors: PhilRandWu
 */

const { Json } = require('sequelize/types/utils');
const Class = require('../Models/Instance/classGrade');

exports.addClass = async function (obj) {
    const ins = await Class.create(obj);
    return ins.toJSON();
}

exports.deleteClass = async function (id) {
    return await Class.destroy({
        where: {
            id
        }
    })
}

exports.updateClass = async function (id, obj) {
    return await Class.update(obj, {
        where: {
            id
        }
    })
}

exports.getByID = async function (id) {
    const result = await Class.findByPk(id);
    if (result) {
        return result.toJSON();
    }
    return null;
}

exports.getAllClass = async function (page = 1, limit = 10, keyword = '') {
    const result = await Class.findAndCountAll({
        attributes: ['name', 'openClass'],
        where: {
            [Op.or]: [
                //里面的两个条件是或者关系
                {
                    //条件1：姓名模糊匹配关键词
                    name: {
                        [Op.like]: `%${keywords}%`,
                    },
                },
            ],
        },
        offset: (page - 1) * limit,
        limit: +limit
    });
    return {
        total: result.count,
        data: JSON.parse(JSON.stringify(result))
    }
}
