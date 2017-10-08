
# Document 
- document는 태그를 선택하고 조작하는데 조작하는데 사용된다.

- document.getElementById(id)
  - html에서 해당 아이디를 가진 태그를 선택한다.
  ```
  document.getElementById('add-root'); 
  //<div id='app-root' data-reactid='3'></div>
  ```
- document.getElementsByClassName(class)
  ```
  document.getElementsByClassName('example')
  //<div class="example"></div>
  ```
- document.getElementsByName(name)
  ```
  document.getElementsByName('up');
  //<form name="up"><input type="text"/></form>
  ```
- document.getElementsByTagName(tag)
  ```
  document.getElementsByTagName('nav'); 
  //<nav class="naviation">nav</nav>
  ```
- document.querySelector(선택자)
  - css 선택자로 선택할 수 있다.(#, .)
  - 태그명[속성명 = 속성값] 가능
  - 부모 > 자식, 부모자손 가능
  ```
  //<div class="myclass" id="myid"></div>
  document.querySelector('.myclass');
  document.querySelector('#myid');
  //<input name="login"/>
  document.querySelector("input[name='login']");
  ```
- document.createElement(tag)
  - document 새로운 태그를 만들때 사용한다. 변수를 통해 메모리에 저장된다.
  만든 태그를 추가하는 메소드는 따로 있다.
  ```
  var div = document.createElement('div'); //메모리에 div 생성
  ```
- document.createTextNode('텍스트');
  - 텍스트도 하나의 요소이다. Node는 태그와 텍스트를 가리키는 명칭이다.
  변수를 통해 메모리에 저장한다.
  ```
  //create a h1 element
  var h1 = document.createElement('h1');
  //create a text node
  var text = document.createTextNode('hello world');
  //append the text to h1
  h1.appendChild(text);
  document.body.appendChild(h1)
  
  <h1>hello world</h1>
  ```
- document.createDocumentFragment()
  - 가짜 document를 만든다. 가짜 document를 만들어서 추가를 한 후,
  한번에 document에 추가한다. 이러면 진짜 document는 한번만 조작하면 돼서
  성능에 부담이 덜한다. (자바스크립트로 document의 태그를 조작하는 것은 매우
  성능이 떨어져서 가짜 document로 성능 부담 해결 가능. 특히 여러 태그를 반복문을
  통해 동시에 추가할때! )
  
  ```
  //가짜 document
  var fragment = document.createDocumentFragment();
  
  // need to call document.createElement each time you wish to have a new element.
  for (var i = 0; i < 5; i++) {
    var div = document.createElement('div');
    var text = document.createTextNode('javascript');
    div.appendChild(text);
    fragment.appendChild(div);
  }

  document.body.appendChild(fragment);
  ```
- document.head, document.body
  - html의 head와 body에 접근할 수 있다.

- document.anchors, document.links, document.forms, document.images, document.scripts
  - html 앵커, 링크, 폼, 이미지, 스크립트에 접근 할 수 있다.

- document.title
  - 문서의 제목에 접근 가능, 바꿀 수 있다.
  ```
  document.title = 'change title' 
  ```
