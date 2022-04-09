/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-09 17:30:50
 * @LastEditTime: 2022-04-09 17:36:21
 * @LastEditors: PhilRandWu
 */
exports.pick = function (obj, ...props) {
    if (!obj || typeof obj !== "object") {
      return obj;
    }
    const newObj = {};
    for (const key in obj) {
      if (props.includes(key)) {
        newObj[key] = obj[key];
      }
    }
    return newObj;
  };
  