interface request {
  request?: {};
  response: {
    body: string | object;
  };
}
class errorMsg {
  flag: boolean
  msg: string
  msgOrigin: string
  constructor(msg: string) {
    this.flag = false
    this.msg = msg
    this.msgOrigin = "node"
  }
}

//class errorMsg2 {
//public flag: boolean
//private msg: string
//protected msgOrigin: string
//readonly msgOrigin2: string
//protected constructor(msg: string) {
//  this.flag = false
//  this.msg = msg
//  this.msgOrigin = "node"
//  this.msgOrigin2 = "333"
//}
//protected emm () {
//	
//}
//static create(msg: string) {
//	return new errorMsg2(msg)
//}
//}
//const a = errorMsg2.create("0")
////console.log(a.emm()) // Property 'emm' is protected and only accessible within class 'errorMsg2' and its subclasses.
//
//class ddd extends errorMsg2{
//	constructor(msg: string) {
//		super(msg)
//	}
//	hi () {
//		super.emm()
//	}
//}
//const b = new ddd("0")
//console.log(b.emm()) // Property 'emm' is protected and only accessible within class 'errorMsg2' and its subclasses.
//console.log(b.flag)
//console.log(b.msg)// 'msg' is private and only accessible within class 'errorMsg2'.
//console.log(b.msgOrigin)// Property 'msgOrigin' is protected and only accessible within class 'errorMsg2' and its subclasses.
// const fn: (a: number, b: number, ...rest: number[]) => string = (a: number, b: number, ...rest: number[]): string => {
// 	return "fn"
// }
//interface run {
//	run(step: number): void
//}
//
//interface talk {
//	talk(msg: string): void
//}
//interface name {
//	name: string
//}
//
//class me implements run, talk, name {
//	name: string
//	constructor (name: string) {
//		this.name = name
//	}
//	run(step: number) {
//		console.log(`step is ${step}`)
//	}
//	talk(msg: string) {
//		console.log(`msg is ${msg}`)
//	}
//}

//abstract class parent {
//	abstract run (step: number): void
//}
//
//class child extends parent {
//	run (step: number){
//	}
//}

function c<T>(type: T) {
	return typeof type
}

c<number>(3)
c<string>(3)

// let age
// age = 18
// age = ""
// age = null
// age = undefined

//const nums = [1, 2, 3, 4]
//const res = nums.find(i => i > 0) // 此时ts并不知道结果一定能找到符合条件的值
//// 以下是两种类型断言, 用于告诉ts, 这里的值一定是number
//const num1 = res as number
//const num2 = <number>res // <> 这种方式会与jsx冲突, 这种情况下不建议使用

export {
  request,
  errorMsg
}
