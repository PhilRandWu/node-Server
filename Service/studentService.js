/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-07 17:22:12
 * @LastEditTime: 2022-04-07 17:36:07
 * @LastEditors: PhilRandWu
 */
const Student = require('../../Models/Instance/student');

exports.addStudent = async function (obj) {
    const ins = await Student.create(obj);
    return ins.toJSON();
}

exports.deleteStudent = async function (id) {
    return await Student.destroy({
        where: {
            id
        }
    })
}

exports.updateStudent = async function (id, obj) {
    return await Student.update(obj, {
        where: id
    })
}
