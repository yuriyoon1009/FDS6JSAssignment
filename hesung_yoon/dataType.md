- Refernce
  - http://poiemaweb.com/js-data-type-variable

### variable
  #### 위치(address)를 기억하는 저장소이다. 즉, 변수는 memory address에 접근하기 위한 식별자(identifier)이다.
  
  ```
  // 변수 선언
  var num;
  // 값의 할당
  num = 10;
  // 값의 재할당
  num = 1000;
  ```
### Data-type (동적 타이핑)
  - JavaScript는 동적 타이핑(Dynamic Typing) 언어로 변수의 Type annotation이 필요없이 값이 할당되는
  과정에서 자동으로 자료형이 결정(Type Inference)된다.
  
  - 기본 자료형 primitive data type : 기본자료형의 값은 변경 불가능한 값(immutable value)이다. 또한 이들은 pass-by-value 이다

  1. Boolean
  1. null
  1. undefined

  ```
  //Boolean
  var foo = true;
  var bar = false;
  
  console.log(typeof(foo)) //boolean
  ```

  ```
  // null : 기본형(primitives) 또는 object형 변수에 값이 없다는 것을 명시한 것이다.
  // 이는 변수와 메모리 어드레스의 참조 정보를 제거하는 것을 의미하며 자바스크립트
  // 엔진은 참조가 없어진 메모리 영역에 대해 가비지 콜렉션을 수행할 것이다.

  var foo = 'lee';
  foo = null; //object형 변수에 값이 없다. 
  
  console.log(typeof foo) //object로 나옴. 

  //null 확인 위해서는
  console.log(typeof foo === null) //false;
  console.log(foo === null) //true;
  ```

  ```
  undefined : 값을 할당하지 않은 변수는 undefined 값을 가진다.
  // 즉, 선언은 되었지만 할당된 적이 없는 변수에 접근하거나 존재하지 않는 객체 프로퍼티에 접근할 경우 반환된다.

  var foo;
  console.log(foo); // undefined

  var bar = {
      name: 'Lee',  //key : value
      gender: 'male'
  };
  console.log(bar);     // { name: 'Lee', gender: 'male' }
  console.log(bar.baz); // undefined
  ```
