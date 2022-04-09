/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-07 17:22:12
 * @LastEditTime: 2022-04-09 15:38:20
 * @LastEditors: PhilRandWu
 */
const Student = require('../Models/Instance/student');
const Class = require('../Models/Instance/classGrade');

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
exports.getStudentById = async function (id) {
    const result = await Student.findByPk(id);
    if (result) {
      return result.toJSON();
    }
    return null;
};
  
  exports.getStudents = async function (
    page = 1,
    limit = 10,
    sex = -1,
    name = ""
  ) {
    // const results = await Student.findAll({
    //   offset: (page - 1) * limit,
    //   limit: +limit,
    // });
    // const total = await Student.count()
    // const datas = JSON.parse(JSON.stringify(results));
    // return {
    //   total,
    //   datas
    // }
    const where = {};
    if (sex !== -1) {
      where.sex = !!sex;
    }
    if (name) {
      where.name = {
        [Op.like]: `%${name}%`,
      };
    }
  
    const result = await Student.findAndCountAll({
      attributes: ["id", "name", "sex", "birthdady"],
      where,
      include: [Class],
      offset: (page - 1) * limit,
      limit: +limit,
    });
    return {
      total: result.count,
      data: JSON.parse(JSON.stringify(result.rows)),
    };
  };
