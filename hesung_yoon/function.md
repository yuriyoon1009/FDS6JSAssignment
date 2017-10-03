javascript function : http://poiemaweb.com/js-function

# 함수 (Function)
  ### 함수란 어떤 특정 작업을 수행하기 위해 필요한 일련의 구문들을 그룹화하기 위한 개념이다.
  ### A function is a block of code designed to perform a particular task.
  
1. 함수선언식 (Function declaration)

```
// 함수명 (function name)
function jsFunc(){
   var name = '함수명은 자신을 재귀적(recursive) 호출하거나 식별자의 역할을 한다.'
   var funcReturn = 'return 으로 결과값 반환. return value' 
   return name + funcReturn 
}

// 매개변수 (function parameters)
function func(para){
  return 'parameters are the names listed in the function definition.'
}

// 인수 (arguments) 
function funcArgu(){
  var kr = '함수를 호출한 함수에 대한 인수'
  var en = 'arguments are the real values received by the function when it is invoked'
  return kr + '\n' + en
}

```
2. 함수표현식 (Function expression)
- anonymous function
