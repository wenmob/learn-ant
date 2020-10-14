/**
 * o1 生成新对象
 * o2 目标对象
 * o3 负值对象
 */
Object.structure = function(o1, o2, o3) {
  Object.keys(o2).forEach((ele) => {
    if (o3[ele]) {
      o1[ele] = o3[ele];
    } else {
      o1[ele] = o2[ele];
    }
  });
  return o1;
};

/**
 * 比较2个对象的属性值是否一致
 * 注意： 2对象的属性本身是基础类型，不包含数组、对象、或其他类型
 *
 */
Object.contrastObj = function(o1, o2) {
  for (let e in o1) {
    if (o2[e] == undefined) {
      return false;
    } else {
      if (o1[e] != o2[e]) {
        return false;
      }
    }
  }
  return true;
};

/**
 * 过滤数据的方法
 */
export function filterObject(obj) {
  let a = {};
  for (let key in obj) {
    if (obj[key] != "") {
      a[key] = obj[key];
    }
  }
  return a;
}
