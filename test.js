console.log("1"+2+2)=122
console.log(1+2+"3")=33
console.log(null>0);//false
console.log(null==0)//false
console.log(null>=0)//true because it works differently than null==0 since firstly it converts null to 0 and then compares but in case of == it just compares

const n=100;
console.log(n.toFixed(3))//it will print upto 3 decimal points if required or exponential
console.log(n.toPrecision(3))//it will print 3 chars if required or exponential
console.log(n.toLocaleString())// in american standards like 10,000,000

const arr1=[1,2,3,4];
const arr2=[8,1,9,7]
const arr3=arr1.concat(arr2);
const arr4=[...arr1,...arr2];//here arr3=aarr4 because ... is a seperator that means elements of array splits
const  obj1=new Object();
const  obj2=new Object();
const obj3=Object.assign({},obj1,obj2);
const obj4={...obj1,...obj2};

//IIFE immediately invoked function expressions
(function f1(){
    console.log("amjed")
})();// function is called immediately without explicitely called //semicolon is important to end this 
(()=>{
    console.log("amjed")
})();
