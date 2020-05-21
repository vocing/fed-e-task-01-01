# fed-e-task-01-01
1、10, 执行时i 已经循环完，值为10;

2、temp is not defined; let、 const所在块级作用域中形成“暂时性死区”, 封闭作用域内定义的变量，其指向作用域内定义的参数，但是let、const没有声明提升，所以用在之前的变量会报错

3、Math.min(...arr)

4、var 声明提升
   let & const 块级作用域（使{}、for循环变为块级作用域）且不可重复声明
   const 定义不可修改的常量、this指向唯一对象(指针不能变，但该对象内的属性可以变化)

5、20  fn 函数为普通函数，内部this指向obj, settimeOut内为箭头函数，this跟随其外this指向

6、Object对象的私有属性实现， 外部不可访问、变更该属性， 可通过Obj暴露出方法来访问

7、浅拷贝，内部有引用类型对象时， 其指向源函数内部对应的引用对象
   深拷贝，生成一个全新的，与源函数没有联系的对象，且内部的一应属性、方法，都是相同的执行方式

8、异步编程，本质是函数的回调，其实现可以是pomise、事件监听、发布订阅、定时任务
   Event loop事件循环 是JS依次执行事件的方式和过程
   宏任务 队列中需要依次执行的任务
   微任务 挂在宏任务之下的任务，每次宏任务执行完时，会检查其下是否有微任务，有的话依次执行微任务，完毕后执行下一个宏任务

9、
function pro (str = "", time, callback) {
	return new Promise(resolve => {
		setTimeout(function(){
			callback && callback(str)
			resolve(str)
		}, 10)
	})
}

pro("hello", 10)
	.then(res => pro(res +"lagou", 10))
	.then(res => pro(res +"I ❤  U", 10, function(str) {
		console.log(str)
	}))

10、typescript 为javascript 增加类型系统，是javascript的超集，用以解决javasccript在大型应用下其身为弱类型语言的短板

11、优点： 1、开发时检查出错误
          2、相应工具完善, 重构、迭代更方便
          3、类型约束, 多人合作开发，方便理解代码
          4、减少不必要的一些类型判断
    缺点： 1、未接触过的同事，增加学习成本
          2、未用熟时，增加开发练习时间
          3、多一个类型系统，本身就会耗费更多时间在开发时间上
