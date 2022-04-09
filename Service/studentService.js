/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-07 17:22:12
 * @LastEditTime: 2022-04-09 18:48:56
 * @LastEditors: PhilRandWu
 */

const { Op } = require("sequelize");
const Student = require('../Models/Instance/student');
const Class = require('../Models/Instance/classGrade');
const validate = require("validate.js");
const moment = require("moment");
const { pick } = require('../Utils/index');

const rule = {
  //验证规则
  name: {
    presence: {
      allowEmpty: false,
    },
    type: "string",
    length: {
      minimum: 1,
      maximum: 10,
    },
  },
  birthday: {
    presence: {
      allowEmpty: false,
    },
    datetime: {
      dateOnly: true,
      earliest: +moment.utc().subtract(100, "y"),
      latest: +moment.utc().subtract(5, "y"),
    },
  },
  sex: {
    presence: true,
    type: "boolean",
  },
  phone: {
    presence: {
      allowEmpty: false,
    },
    format: /1\d{10}/,
  },
  ClassId: {
    presence: true,
    numericality: {
      onlyInteger: true,
      strict: false,
    },
    classExits: true,
  },
};

exports.addStudent = async function (obj) {
  obj = pick(obj, "name", "birthday", "sex", "phone", "classID");
  console.log(obj)
  validate.validators.classExits = async function (value) {
    const c = await Class.findByPk(value);
    if (c) {
      return;
    }
    return "is not exist";
  };
  await validate.async(obj, rule);
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
