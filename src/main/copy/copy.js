const deepClone1 = (obj) => {
  if (typeof obj !== 'object' || obj === null) return obj
  const newObj = new obj.constructor;
  for (const key in obj) {
    if (obj[key] === obj) {
      newObj[key] = obj
    } else {
      newObj[key] = deepClone1(obj[key])
    }
  }
  return newObj
}


// function deepClone(obj, hash = new WeakMap()) {
//   if (obj === null) return obj;
//   // 如果是null或者undefined我就不进行拷贝操作
//   if (obj instanceof Date) return new Date(obj);
//   if (obj instanceof RegExp) return new RegExp(obj);
//   // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝
//   if (typeof obj !== "object") return obj;
//   // 是对象的话就要进行深拷贝
//   if (hash.get(obj)) return hash.get(obj);
//   let cloneObj = new obj.constructor();
//   // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
//   hash.set(obj, cloneObj);
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       // 实现一个递归拷贝
//       cloneObj[key] = deepClone(obj[key], hash);
//     }
//   }
//   return cloneObj;
// }
//
// let obj = {x: 1, y: 2};
// obj.o = obj;
// obj.z = 3
// let d = deepClone(obj);
// console.log(d);


let obj1 = {
  a: '1',
  b: 1,
  c: false,
  d: null,
  e: undefined,
  f: function () {
  },
  g: [1, 2, 3],
  h: {
    _: 1
  }
}
obj1.i = obj1
obj1.j = 5
const newObj = deepClone1(obj1)
obj1 = {}
console.log('obj1', obj1);
console.log('newObj', newObj)


