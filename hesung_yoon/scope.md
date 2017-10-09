Reference
- javascript scope
   - http://poiemaweb.com/js-scope

# Scope (유효범위)
 - 변수에의 접근성과 생존기간(life-cycle), 변수가 가지고 있는 참조 범위를 의미한다.

1. Global scope (전역 scope)
 - 글로벌 영역에 변수를 선언하면 이 변수는 어는곳에서든지 참조(접근) 할 수 있다.
 
2. Function scope
```
var a = 10; // global object

(function(){
  var b = 20;  //local object
})();

console.log(10); //10
console.log(b); // 'b' is not defined
```

```
// 내부함수 스코프

var x = 'global'; //global object

function foo() {
  var x = 'local';
  console.log(x);

  function bar() {  // 내부함수
    console.log(x); // 'local'
  }

  bar();
}
foo();
console.log(x); // 'global'
// 실행 컨텍스트의 스코프 체인에 의해 참조 순위에서 전역변수 x가 뒤로 밀렸다.
```
```
//상위에 함수에서 선언한 변수에 접근/ 변경이 가능하다.
var x = 10;

function foo() {
  x = 100;
  console.log(x);
}
foo();          // 100 
console.log(x); // 100
```
```
//중첩 scope는 가장 인접한 지역을 우선하여 참조한다.
var x = 10;

function foo(){
  var x = 100;
  console.log(x);

  function bar(){   // 내부함수
    x = 1000;
    console.log(x); // ?
  }

  bar();
}
foo(); // 100 1000 
console.log(x); // 10
```

3. 암묵적 전역(implied globals)

function foo(){
  var local = 'local';
  console.log(global);
  
}











