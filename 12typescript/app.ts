// interface IPerson { 
//     firstName:string, 
//     lastName:string, 
//     sayHi: ()=>string 
// } 
 
// var customer:IPerson = { 
//     firstName:"Tom",
//     lastName:"Hanks", 
//     sayHi: ():string =>{return "Hi there"} 
// } 
 
// console.log("Customer 对象 ") 
// console.log(customer.firstName) 
// console.log(customer.lastName) 
// console.log(customer.sayHi())  
 
// var employee:IPerson = { 
//     firstName:"Jim",
//     lastName:"Blakes", 
//     sayHi: ():string =>{return "Hello!!!"} 
// } 
 
// console.log("Employee  对象 ") 
// console.log(employee.firstName) 
// console.log(employee.lastName)

// class A{
    
// }

// class Car { 
//     // 字段
//     engine:string; 
    
//     // 构造函数
//     constructor(engine:string) { 
//        this.engine = engine 
//     }  
    
//     // 方法
//     disp():void { 
//        console.log("函数中显示发动机型号  :   "+this.engine) 
//     } 
//  } 
  
//  // 创建一个对象
//  var obj = new Car("XXSY1")
  
//  // 访问字段
//  console.log("读取发动机型号 :  "+obj.engine)  
  
//  // 访问方法
//  obj.disp()
class Shape { 
    Area:number 
    
    constructor(a:number) { 
       this.Area = a 
    } 
 } 
  
 class Circle extends Shape { 
    disp():void { 
       console.log("圆的面积:  "+this.Area) 
    } 
 }
   
 var obj = new Circle(223); 
 obj.disp()