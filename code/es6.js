const { log } = console

// const name = "3333"
// const type = "ddd"
// const m = (str, x, y, z) => {
  // log(str, x, y, z)
// }
// const result = m`hei, ${name} is a ${type}`

// log("dddsada".startsWith("ddd"))
// log("dddsada".endsWith("ada"))
// log("dddsada".includes("ada"))
// log(["dddsada"].includes("dddsada"))

// log("dddsada".indexOf("ada"))
// log("dddsada".indexOf(["dddsada"]))
// log(["dddsada"].indexOf("dddsada"))
// log("dddsada".indexOf("dddsada"))

// const data = {
  // e: 2
// }
// 
// const { e, d = 2, m} = data
// log(e, d, m)

// function foo (m, ...r) {
  // log(m , r)
// }
// 
// foo(1, 2, 3, 4)

// const arr = [1 ,2, 3, 4]
// 
// function foo (x,y,z) {
  // console.log(this)
  // console.log(x,y,z)
// }
// 
// console.log.apply(console, arr)
// console.log(arr)
// foo.apply(arr, arr)
// foo.call(arr, 1, 2, 3, 4)

// class pro {
  // constructor (name) {
    // this.name = name
  // }
  // 
  // static create (name) {
    // return new pro(name)
  // }
// }
// 
// const a = pro.create("a")
// log(pro.name)

// log(Object.is(+0, -0))


/* defineProperty, defineProperties, proxy*/
// let c = 1;
// let obj = {}
// Object.defineProperty(obj, "a", {
  // get() {
    // return c
  // },
  // set (val) {
    // console.log("set", val)
    // c = val
  // }
// })
// obj.a = 2
// log(obj.a)

// let c = 1;
// let d = 11;
// let obj2 = {};
// Object.defineProperties(obj2, {
  // "a": {
    // get() {
      // return c
    // },
    // set (val) {
      // console.log("set", val)
      // c = val
    // }
  // },
  // "c": {
    // get() {
      // return d
    // },
    // set (val) {
      // console.log("set", val)
      // d = val
    // }
  // }
// })
// 
// obj2.a = 3
// log(obj2.a)
// obj2.c = 33
// log(obj2.c)

// let origin = { c: 3, m: function() {
  // console.log(this.c)
// }}
// let c = new Proxy(origin, {
  // get (origin, property) {
    // // log(origin, property)
    // return origin[property]
  // },
  // set (origin, property, val) {
    // log(origin, property, val)
    // origin[property] = val
    // if (property === "a") {
      // if (isNaN(val)) {
        // throw new TypeError(`${val} is not a Number`)
      // }
    // }
  // }
// })
// c.c=5
// log(origin.c)
// log(c.c)
// c.m()

// function ccc (...val) {
  // console.log(this, val)
  // this.c = val
// }
// 
// let obj = {a : 1, age: "18"}
// log(Reflect.get(obj, "a"))
// log(Reflect.deleteProperty(obj, "a"))
// log(Reflect.has(obj, "a"))
// let arr = [1, 2, 3, 4]
// let c = {}
// Reflect.apply(ccc, c, arr)
// console.log(c)
// log(Reflect.apply("".charAt, "ponies", [3]))
// Reflect.apply(Math.floor, undefined, [1.75])

// class parent {
  // constructor (name) {
    // this.name = name
  // }
  // 
  // say () {
    // console.log(`name is ${this.name}`)
  // }
// }
// 
// class child extends parent {
  // constructor (name, number) {
    // super(name)
    // this.number = number
  // }
  // 
  // say () {
    // super.say()
    // console.log(`number is ${this.number}`)
  // }
// }
// 
// let c = new child("bool", "type")
// c.say()

// log([...new Set([1, 2, 3, 4, 2, 3, 1, 1,,])].length)

// let c = new Map()
// 
// c[{}] = 3
// c[{a: 1}] = 3
// c[+0] = 4
// c[-0] = 5
// 
// c.set({}, 10)
// c.set({a: 1}, 20)
// log(c)
// c.delete(+0)
// log(c)
// log(c.has({a: 1}))
// let m = { c: 3 }
// c.set(m, 30)
// log(c.has(m))
// log(c)
// c.delete(m)
// log(c)

// let obj = []

// let t = new Proxy(obj, {
//   get (target, prop) {
//     console.log("get", target, prop)
//     return target[prop]
//   },
//   set (target, prop, value) {
//     console.log("set", target, prop, value)
//     target[prop] = value
//     return true
//   }
// })

// t.push(3)

// t.push(43)

// let obj = {
//   a: "1"
// }

// log(Reflect.has(obj, "a"))
// log(Reflect.apply(Math.min, -5, [3 ,4 ,5, 0, 1 , ]))
// log(obj)
// console.log(Reflect.apply(RegExp.prototype.exec, /ab/, ['confabulation']));

// class ddd {
//   constructor(name) {
//     this.nam1e = name
//     this.d = 111
//   }
//   say() {

//   }
// }
// ddd.prototype.ccc = function () {}
// console.log(ddd.prototype)
// console.log(new ddd().__proto__)
// console.log(new ddd().say)
// console.log(new ddd().ccc)
// class eee {
//   constructor(name) {
//     this.name = name
//     this.d = 222
//   }
// }

// var a = Reflect.construct(ddd, [333], eee) // 构造器, 入参, 指向
// log(a)
// log(a.b)
// log(a instanceof ddd)
// log(a instanceof eee)

// var b = new ddd()
// log(b instanceof ddd)

// const student = Reflect.construct(ddd, ["named"]);
// Reflect.defineProperty(student, "name", {value: "Mike", writable: true, enumerable: true, configurable: true}); // true
// log(student)
// log(Reflect.has(student, "name"))
// log(Reflect.deleteProperty(student, "name"))
// log(Reflect.has(student, "name"))
// log(Reflect.get(student, "name"))
// student.name = 3
// log(student.name)
// log(Reflect.get(student, "name"))
// log(Reflect.getOwnPropertyDescriptor(student, "name"))
// log(Reflect.getPrototypeOf(student))

// class ccc {
//   constructor (name) {
//     this.name = name
//   }
// }
// ccc.prototype.ccc = 222
// const obj = new ccc("name")

// Reflect.setPrototypeOf(obj, {
//   a: 3
// }) 
// log(obj)

// for (let i in obj) {
//   console.log("all", obj[i])
// }
// for (let i of Object.keys(obj)) {
//   console.log("own", obj[i])
// }
// console.log(Reflect.ownKeys(obj))

// Reflect.setPrototypeOf(obj, null) 
// // log(Reflect.isExtensible(obj))
// // Reflect.preventExtensions(obj)
// // log(Reflect.isExtensible(obj))

// const m = {
//   m: 4
// }

// let mm
// Reflect.defineProperty(obj, "d", {
//   set (value) {
//     console.log(this)
//     console.log(value, this["d"])
//     console.log(value === this["d"])
//     mm = value
//     return true
//   },
//   get () {
//     return mm
//   }
// })
// Reflect.set(obj, "d", 3)
// Reflect.set(obj, "d", 3)
// log(m)
// log(obj)
// for (let i in obj) {
//   console.log(obj[i])
// }

/* Set */
// const arr = [1, 2,3, ,4,5,6,766,5,3243,2,3,1,32,23,]
// let set = new Set(arr)
// set.add(67)
// set.add(1)
// set.delete(1)
// // set.clear()
// log("set", set.entries())
// log("map", new Map(set.entries()))
// log("set", Array.from(set.entries()))
// log("set", Array.from(set.entries()))
// log(set)
// log(
//   arr.length,
//   set.size
// )

// let mapd = new Map(new Set(arr).entries())
// console.log(set.forEach((value, key, self) => {
//   console.log(value, key)
// }))
// mapd = new Map([[1, 2], [{"key": "its key"}, "value"]])
// console.log(mapd.forEach((value, key, self) => {
//   console.log(value, key)
// }))
// for (let [key, val] of mapd) {
//   console.log(key, val)
// }


/* Symbol 私有成员*/
// const obj = (() => {
//   const a = Symbol()
//   return {
//     [a]: 333,
//     getA() {
//       return this[a]
//     }
//   }
// })()
// log(obj.getA())

// const b = {
//   [Symbol.toStringTag]: "b"
// }
// const obj = {
//   [b]: "1111"
// }
// log(obj)

// for (let i of "dsadsad") {
//   log(i)
// }

// var myIterable = {
//   arr: [1 ,2 ,3 ,4 ],
//   arr2: [2 ,2 ,3 ,4 ],
//   [Symbol.iterator]: function * () {
//     let arr = [...this.arr]
//     let i = 0
//     while(arr[i]) {
//       yield arr[i++]
//     }
//   },
//   getArray(...args) {
//     console.log(this === myIterable)
//     this[Symbol.iterator] = function * () {
//       let arr = []
//       args.forEach(item => {
//         if (this[item] && Array.isArray(this[item])) {
//           arr = arr.concat(this[item])
//         }
//       })
//       let i = 0
//       while(arr[i]) {
//         yield arr[i++]
//       }
//     }
//   }
// }
// log(...myIterable)
// myIterable.getArray("arr", "arr2")
// log(...myIterable)
// log([...(myIterable.getArray("arr"))])


// Symbol.for 会把方法中入参的数据转化成字符串，
// 如果是array类型, 会调用Array.join 方法拼接
// 如果是object类型(包括数组中的object), 会先行转译为 [Object, Object]
// 对象中, toStringTag方法会改变为 [Object ${this.toStringTag}]
// log(Symbol.for([1, 2]) === Symbol.for("1,2"))
// log(Symbol.for([1, {}]) === Symbol.for("1,2"))
// log(Symbol.for([1, {[Symbol.toStringTag]: "xxx"}]))
// class ddd {
//   constructor (name) {
//     this.name = name
//     this.full = "yes"
//   }
//   static create (name) {
//     return new this(name)
//   }
//   say () {

//   }
// }

// const a = new ddd("a")
// log(a.say)


// class Replace1 {
//   constructor(value) {
//     this.value = value;
//   }
//   [Symbol.replace](string) {
//     return `s/${string}/${this.value}/g`;
//   }
// }

// console.log('foo'.replace(new Replace1('bar')));


// Object.keys 获取自身可枚举的属性名
// Object.getOwnPropertySymbols 获取自身symbol类型的属性名
// Reflect.ownKeys 获取自身所所有属性名

// const obj = {
//   arr: [1, 2 , 3],
//   [Symbol()]: 111,
//   [Symbol.iterator]: function (i = 0) {
//     return {
//       next: () => {
//         return {
//           value: this.arr[i],
//           done: i++ >= this.arr.length
//         }
//       }
//     }
//   },
//   a: 222,
// }

// // console.log(obj)
// // console.log(Object.keys(obj))
// // log(Object.getOwnPropertySymbols(obj))
// // console.log(Reflect.ownKeys(obj))

// for (let i of obj) {
//   console.log(i)
// }


// o = { get foo() { return this.a + 17; }, a: 111 };
// d = Object.getOwnPropertyDescriptor(o, "foo");

// c = Object.assign({}, o)
// Object.defineProperties(c, Object.getOwnPropertyDescriptors(o))
// log(o)
// o.a = 3
// log(o.foo)
// c.a = 4
// log(c.foo)

// 补齐位数
// padStart 字符串之前填充
// padEnd   字符串之后填充
// console.log("11".padStart(16, "-")) // --------------11
// console.log("1111".padEnd(16, "-")) // 1111------------

// Object.assign 不是深拷贝也不是浅拷贝, 其只会深拷贝对象的第一层, 再往内的几层都是浅拷贝
// const a = { a: { a: { a: 1 } } }
// const b = Object.assign({}, a)
// log(b.a === a.a) // true

// Object.freeze(a)
// a.a.a = {}
// log(b)
// var test = {        name: 'a',        date: [new Date(1536627600000), new Date(1540047600000)],
//       };      let b;
//       b = JSON.parse(JSON.stringify(test))
// log(b)

// let i = 1
// if (true) {
//   let i = 0
//   console.log(i)
// }
// console.log(i)

// const b = {
//   [i]: 1
// }


// log(Object.is(0, false))

// class person {	
//   constructor(name) {		this.name = name	}
//   say() {		console.log(`my name is ${this.name}`)	}	
//   static create(name) {	
//     return new person(name)
//   }
// }
// const a = person.create("a")  // 等价 new person("a")
// class child extends person {	
//   constructor(name, age) {
//     super(name)
//     this.age = age
//   }	
//   hello () {
//     super.say()
//     console.log(`my age is ${this.age}`)
//   }
// }
// const b = new child("b", 18)
// console.log(b)
// b.hello()


// const arr = [1 , 2, 3, 4, 5, 6, 7, 8, 3, 2, 1, 1, 1, ,]
// const set = new Set(arr) // Set { 1, 2, 3, 4, 5, 6, 7, 8, undefined }
// set.has(1) // true
// set.has(11) // false
// set.add(1)
// set.add(12)
// set.clear()
// set.delete(1)
// log(set.values())

// log([...set])
// const m = new Map(set.entries())
// const prop = {}
// log(m.set(prop, 1))
// log(m.get(prop))
// log(m.get({}))

// const iterator1 = set[Symbol.iterator]();
// console.log(iterator1.next().value);
// console.log(iterator1.next().value)
// expected output: 42

// const obj = (() => {
//   const b = Symbol.for("dsada")
//   log(b)
//   const a = Symbol()
//   return {
//     [a]: 111,
//     say () {
//       console.log(this[a])
//     }
//   }
// })()

// log(obj) // { say: [Function: say], [Symbol()]: 111 }
// obj.say() // 111
// log(Symbol.for("dsada") === Symbol.for("dsada")) // true
// log(Symbol("dsada") === Symbol("dsada")) // false

// const arr = [1, 2, 3, 4]
// for( let val of arr) {
//   log(val)
// }
// const map = new Map([[1, 3], [1, 4], [2, 4]])
// for( let val of map) {
//   log(val)
// }

/**
 * 自定义可迭代对象
 */
// const obj = {
//   arr: [1, 2, 3, 4],
//   arr2: [5, 6, 7, 8],
//   arr3: [9, 10, 11, 12],
//   allArr: [],
//   changeIterator (...arg) {
//     let arr = []
//     arg.forEach(item => {
//       if (this[item]) {
//         arr = arr.concat(this[item])
//       }
//     })
//     this.allArr = arr
//   },
//   [Symbol.iterator] () {
//     let i = 0
//     return {
//       next: () => {
//         return {
//           value: this.allArr[i],
//           done: i++ >= this.allArr.length
//         }
//       }
//     }
//   }
// }
// obj.changeIterator("arr", "arr2")
// log(obj)
// for(let val of obj) {
//   console.log(val)
// }

// function* gen() { 
//   yield 1
//   yield 2
//   return 33
//   yield 4
// }

// let g = gen(); 
// log(g.next()) // { value: 1, done: false }
// log(g.next()) // { value: 2, done: false }
// log(g.next()) // { value: 33, done: false }
// log(g.next()) // { value: undefined, done: false }

// const obj = {
//   arr: [1, 2, 3, 4],
//   arr2: [5, 6, 7, 8],
//   arr3: [9, 10, 11, 12],
//   allArr: [],
//   changeIterator (...arg) {
//     let arr = []
//     arg.forEach(item => {
//       if (this[item]) {
//         arr = arr.concat(this[item])
//       }
//     })
//     this.allArr = arr
//   },
//   [Symbol.iterator]: function * () {
//     for (let i of this.allArr) {
//       yield i
//     }
//   }
// }

// function * ddd() {
//   let i = 0
//   while (i < 10) {
//     yield i
//   }
// }
// let g = ddd()
// log(g.next())

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(22)
  }, 2000)
})
const l = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("error")
  }, 2000)
}).catch(err => {
  log(err)
})

async function ccc () {
  console.log(`startTime：${new Date().getTime()}`)
  const m = await p
  const n = await l
  console.log(`endTime：${new Date().getTime()}`)
}
let n = ccc()
n.then(() => {
  console.log("all done")
})
log(n)


// obj.changeIterator("arr", "arr2")
// for (let i of obj) {
//   console.log(i)
// }

// log([NaN, 1, 2].includes(1, 1 ))
// log([NaN, 1, 2].indexOf(1, 2))
// console.log([1, 2, 3, 4, 5].includes(1, 1)) // false
// console.log([1, 2, 3, 4, 5].includes(1, -5)) // true

// console.log(Math.pow(2, 4))
// console.log(2 ** 4)

// console.log(Object.values({ foo: 'bar', baz: 42 })) // ["bar", 42]
// console.log(Object.entries({ foo: 'bar', baz: 42 })) // [ [ 'foo', 'bar' ], [ 'baz', 42 ] ]
// console.log(new Map(Object.entries({ foo: 'bar', baz: 42 }))) // Map { 'foo' => 'bar', 'baz' => 42 }

// const object1 = {
//   a: 'somestring',
//   b: 42
// };

// for (let [key, value] of Object.entries(object1)) {
//   console.log(`${key}: ${value}`);
// }


// let p1 = {
//   fisrtName: "111",
//   get name () {
//     return this.fisrtName
//   },
//   set setName (name) {
//     this.fisrtName = name
//   },
//   a: 15648797977897,
//   d: new Date()
// }
// let p2 = Object.assign({}, p1)
// console.log(p2.name)
// p1.fisrtName = 222
// p2.fisrtName = 222
// console.log(p1.name)
// console.log(p2.name)
// console.log(p2.setName)
// let p3 = Object.defineProperties({}, Object.getOwnPropertyDescriptors(p1))
// console.log(p3.name)
// p1.fisrtName = 222
// p3.fisrtName = 333
// console.log(p1)
// console.log(p3)
// // p3.setName(444)
// console.log(p3.setName)

// Object.defineProperties(p1, {
//   get () {
//     return 1
//   }
// })
// let p1 = {
//   fisrtName: "111",
//   get name () {
//     return this.fisrtName
//   },
//   set setName (name) {
//     this.fisrtName = name
//   },
//   a: 15648797977897,
//   d: new Date()
// }
// let p4 = Object.create({}, Object.getOwnPropertyDescriptors(p1))
// console.log(p4)
// p4.fisrtName = 333
// console.log(p4)

// const promise1 = Promise.resolve(3);
// const promise2 = false;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });


// class person {
//   constructor(name) {
//     this.name = name
//   }
//   say() {
//     console.log(`my name is ${this.name}`)
//   }
//   static create(name) { 
//     // 静态类, 只能person自身调用
//     return new person(name)
//   }
// }
// class child extends person {
//   constructor(name, age) {
//     super(name) // 这里的这个属性必须调用
//     this.age = age
//   }
//   hello () {
//     super.say()
//     console.log(`my age is ${this.age}`)
//   }
// }

// const a = new child("a", 100)
// a.hello() // my name is a // my age is 100

// Promise
//   .resolve(1)
//   .then(res => {
//     console.log(res)
//     return 2
//   })
//   .then(res => {
//     return new Promise((resolve, reject) => {
//       reject(444)
//     })
//   })
//   .catch(err => {
//     console.log(err)
//     return 3
//   })
//   .then(res => {
//     console.log(res)
//   })

// proxy代理
const person = {
  name: "ben",
  age: 18
}
// const newPerson = new Proxy(person, {
//   get(target, prop) {
//     // 此处可增加拦截方法
//     return prop in target ? target[prop]: "default"
//   },
//   set(target, prop, value) {
//     //  此处可增加拦截方法, 数据校验等
//     target[prop] = value
//   },
// })

const newPerson = new Proxy(person,
  {
    get(target, prop) {
    // 此处可增加拦截方法
    return Reflect.get(person, prop)
    }
  }
)
// "name" in obj ----> Reflect.has(obj, "name")
// delete obj["name"] ----> Reflect.deleteProperty(obj, "name")
// Object.keys(obj) ----> Reflect.ownKeys(obj)
// 注意：Object.keys 获取自身可枚举的属性名Object.getOwnPropertySymbols 获取自身所有symbol类型的属性名Reflect.ownKeys 获取自身所所有属性名

// prototype属性has: set.has(1) // true
// set.has(11) // false
// add: Set 对象的末尾添加一个指定的值(不能是已有的值)
// clear: 清空Set对象
// delete: 删除Set中指定元素
// entries: 返回新的迭代器对象, 为了与 Map 对象的 API 形式保持一致，故使得每一个 entry 的 key 和 value 都拥有相同的值，因而最终返回一个 [value, value] 形式的数组，参见:其他
// forEach: 接受(funcition, thisObj): (function(value, key, set), arr)=>{}
// has: 值是否在Set实例中
// values: 返回迭代器对象,按照原Set对象元素的插入顺序keys: 与values一致
// [Symbol.iterator]: 迭代器方法, 参见模块: iterable迭代器

// prototype属性size: 返回Map对象的成员(元素)数量
// clear: 清空Map元素
// delete: 删除元素
// entries: 返回一个新的包含 [key, value] 对的 Iterator 对象，返回的迭代器的迭代顺序与 Map 对象的插入顺序相同
// forEach: 接受(funcition, thisObj): (function(value, key, set), arr)=>{}
// set: 添加或更新键值对, map.set(prop, 'foo')
// get: 根据键名获取键值, map.get(prop) // "foo"
// values: 返回一个新的Iterator对象。它包含按顺序插入Map对象中每个元素的value值
// [@@toString]: new Map().toString() // [object Map]
// [Symbol.species]：Map[Symbol.species] === Map // true
