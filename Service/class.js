/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-07 17:28:32
 * @LastEditTime: 2022-04-07 17:36:08
 * @LastEditors: PhilRandWu
 */

const Class = require('../../Models/Instance/class');

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
