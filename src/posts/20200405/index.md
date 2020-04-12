---
title: TCL
date: "2020-04-05"
description: "TCL20200405"
---

### TCL

#### javaScript
- 전개연산자  
...  
배열에 있는 요소들을 가지고 온다.
```
function sum(x, y, z, a) {
  return x + y + z - a;
}
const numbers = [1, 2, 3, 4]; 
console.log(...numbers); // 1, 2, 3, 4
console.log(sum(...numbers));
// expected output: 2
console.log(sum.apply(null, numbers));
// expected output: 2
```
객체의 경우 덮어쓰기
```
var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };
var clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }
var mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }
```


### 생각

###ref
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax

