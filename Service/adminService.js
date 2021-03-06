/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-06 21:39:02
 * @LastEditTime: 2022-04-09 16:02:42
 * @LastEditors: PhilRandWu
 */
// 管理员初始化
// 判断数据库中是否有管理员，如果没有，自动添加一个默认管理员
const md5 = require('md5');
const Admin = require("../Models/Instance/admin");
exports.addAdmin = async function (adminObj) {
  // 应该判断adminObj的各种属性是否合理，以及账号是否已存在
  adminObj.password = md5(adminObj.password);
  const ins = await Admin.create(adminObj);
  return ins.toJSON();
};

exports.deleteAdmin = async function (adminId) {
  // 方式1
  //   // 1.得到实例
  //   const ins = await Admin.findByPk(adminId);
  //   //   console.log(ins);
  //   // 2.删除实例
  //   if (ins) {
  //     await ins.destroy();
  //   }
  // 方式2
  const result = await Admin.destroy({
    where: {
      id: adminId,
    },
  });
  return result;
};

exports.updateAdmin = async function (id, adminObj) {
  // 方式1
  // // 1. 得到实例
  // const ins = await Admin.findByPk(id);
  // ins.loginId = adminObj.loginId;
  // // 2. 保存
  // ins.save();

  // 方式2
  adminObj.password = md5(adminObj.password);
  const result = await Admin.update(adminObj, {
    where: {
      id,
    },
  });
  return result;
};

exports.login = async function (account, password) {
  const result = await Admin.findOne({
    where: {
      account,
      password: md5(password)
    }
  });
  if (result && result.account === account && result.password === md5(password)) {
    return result.toJSON();
  }
  return null;
}

exports.getByID = async function (id) {
  const result = await Admin.findByPk(id);
  if (result) {
    return result.toJSON();
  }
  return null;
}


exports.getAllAdmin = async function () {
  const result = await Admin.findAll();
  return JSON.parse(JSON.stringify(result));
}
