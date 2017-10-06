Reference
- javascript function
   - http://poiemaweb.com/js-this
   - http://poiemaweb.com/js-this

# 함수 호출 패턴에 따라 결정되는 this 
  
1. 호출 패턴 
```
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


// 인수 (arguments) 
//전달된 인수들의 정보를 담고있는 유사배열객체(array-like object)이다.
function funcArgu(){
  var kr = '함수를 호출한 함수에 대한 인수'
  var en = 'arguments are the real values received by the function when it is invoked'
  return kr + '\n' + en
}
function multiply(x,y){
 console.log(arguments)
 }
multiply(1,2,3)
//{'0':1, '1':2, '2':3}, arguments[0] 1... arguments.length is 3

```
2. 함수표현식 (Function expression)
- anonymous function
```
var foo = function(a,b){
  return a *b;
}
//foo 변수는 할당된 함수를 가리키는 참조값을 저장하게 된다.
이 변수가 함수명처럼 사용된다.
foo(10,10) // 100
```
3. 생성자함수 (Function())
Function() 생성자 함수는 Function.prototype.constructor 접근할 수 있다. 
```
//생성자함수내에는 this라는 변수를 참조할 수 있다.
var Person = function(name){
  this.name = name;
  this.say = function(){
     return "hello, my name is " + this.name; 
   }
}

var p = new Person('kim');

//해당함수의 프로토타이도 상속받을 수 있다.
Person.prototype.getName = function(){
  return this.name
};

p.getName() //kim
```
4.함수 호이스팅(Function hoisting)
var, function 해당 Scope의 맨 위로 옮기는것을 말한다. 자바스크립트 엔진이 
스크립트가 로딩되는 시점에 바로 초기화하고 이를 VO(variable object)에 저장한다.
함수선언, 초기화, 할당이 한번에 이루어진다. 
```
// 함수 호이스팅은 규칙을 무시해서 코드의 구조를 엉성하게 만든다.
// 함수 선언식은 너무 많은 코드를 변수 객체(VO)에 저장하므로 애플리케이션 응답속도
// 떨어짐.
// 더글러스 크락포드는 함수 표현식 권장

//함수 호이스팅 : 함수 선언문이면 맨앞에서 시작되어 정상 동작
add(3,5) //8

function add(x,y){
  return x + y;
}
//함수 호이스팅 에러 
add(3,5) //add is not defined

//함수 표현식 - 함수 호이스팅이 일어나지 않음.
var add = function add(x,y){
  return x + y;
}
```
5.일급객체 (First-class object)
객체(object)를 1급 시민으로써 취급한다. 아래 조건을 모두 충촉한다.
 - 무명의 리터럴로 표현이 가능하다.
 - 변수(variable)에 담을 수 있다.
 - 인자(parameter)로 전달할 수 있다.
 - 반환값(return value)로 전달할 수 있다.
 - 자료 구조(객체, 배열..)에 저장할 수 있다.

6.값에 의한 호출(call-by-value)
인수(arguments)를 함수에 인자(parameter)로 전달할 때 매개변수에 값을 복사하여
함수로 전달하는 방식이다.
```
function foo(primitive){
 primitive += 1;
 return primitive;
}

var x = 0;
foo(x) // 1
```
7.참조에 의한 호출 (call-by-reference)
매개변수의 참조값이 객체의 값을 변경했을 때 전달되어진 참조형의 인수값도 같이 변경된다.
원본 객체가 변경되는 부수효과(side-effect) 발생. 부수 효과를 발생시키는 비순수 함수
(Impure function)는 복잡성을 증가시킨다.
```
//객체의 값
var obj = {
  name : 'lee',
  gender : 'male'
}

function changeVal(change){
  primitive += 100;
  change.name = 'kim';
  change.gender = 'female';
}

console.log(obj); //obj {name:'kim', gender:'female'}
```
8. 반환값 (return value)
- 함수를 호출한 코드(caller)에게 값을 반환할때 사용한다.
- 함수는 반환을 생략할 수 있다. 이때 함수는 암묵적으로 undefined를 반환한다.
- return 반환 후 함수의 실행을 중단한다. 함수를 호출한 코드로 되돌아간다.
```
function calcuArea(width, height){
  var area = width * height;
  return area; //단일 값 반환
}
calcuArea(3,5) //15

function size(width, height, depth){
  var area = width * height;
  var volumne = width * height * depth;
  return [area, volumne] //복수 값 반환
}
size(2,3,4) //[6, 24]
size(2,3,4)[0] //6
size(2,3,4)[1] //24
```
9. arguments 인수


