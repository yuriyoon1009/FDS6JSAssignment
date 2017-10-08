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
//생성자 호출 패턴 ( Constrctor Invocation Pattern)
function Person(name){
  //생성자 함수 코드 실행 전은 this는 빈 객체를 가리킨다.
  this.name = name;
  //생성된 함수 반환
}

var me = new Person('Lee');
me.getName() //Lee

Person.prototype.getName = function(){
  return this.name;
}

//메소드호출패턴 (Method Invocation Pattern)
//프로토타입 객체도 메소드를 가질 수 있다.
Person.prototype.name = 'Kim';
//프로토타입 객체 메소드 내부에서 사용된 this도 해당 메소드를 호출한 객체에 바인딩된다.
Person.prototype.getName() //Kim
```
2. 객체 리터럴 방식과 생성자 함수 방식
두 함수 방식의 차이는 프로토타입 객체([[prototype]])에 있다.
- 객체 리터럴이면, 생성된 객체의 [[prototype]]은 Object.prototype
- 생성자 함수이면, 생성된 객체의 [[prototype]]은 Person.prototype

```
//객체 리터럴
var foo = {
  name:'foo',
  gender:'male'
}

console.dir(foo) //object.prototype

//생성자 함수
var Person = function(name){
  this.name = name;
}

var me = new Person('Lee');
console.dir(me); //Person.prototype

```

3. apply 호출 패턴(Apply Invocation Pattern) 
this를 특정 객체에 명시적으로 바인딩하는 방법이 있다.
 - Function.prototype.apply()
   - apply()메소드를 호출하는 주체는 함수이다.
   - apply()메소드는 this를 특정 객체에 바인딩할뿐 기능은 함수 호출이다.
   - func.apply(thisArg, [argsArray]) 
   - thisArg : 함수 내부의 this에 바인딩할 객체
   - argsArray : 함수에 전달한 인자 배열.
   - apply() 대표적 용도는 arguments(유사배열)객체에 배열 메소드를 사용하는 경우이다.
 
 - Function.prototype.call() 
   - apply()기능과 같다. 
   - func.call(thisArg, 1,2,3);
```
//apply() 
var Person = function(name){
 this.name = name;
}

var foo = {}

//Function.prototpye.apply() 함수 호출
//this에 객체 foo를 바인딩한다.
Person.apply(foo, ['name']);
console.log(foo); {name:'name'}

```
4. arguments 객체 배열로 변환하기
   - array.prototype.slice.apply(arguments)
    - this는 arguments객체로 바인딩하라는 의미
    - 즉, arguments.slice() 형태로 호출하라는것
```
function convertArgsToArray(){
  console.log(arguments) //유사배열객체
  
 //var arr = [].slice.apply(arguments);
  var arr = Array.prototype.slice.apply(arguments);
  
  //배열로 변환
  변환console.log(arr); 
}
```

5. apply()와 call()메소드는 콜백함수 this를 위해 사용되기도 한다.

```
function Person(name){
  this.name = name;
}

Person.prototype.doSth = function(callback){
  if(typeof callback == 'function'){
     callback.call(this) //function Person
   }
}

function foo(){
  console.log(this.name) 
}

var p = new Person('Lee')
p.doSth(foo) //Lee
```





