(function() {
    var inputTodo = document.getElementById('input-todo');
    var todoList = document.getElementById('todo-list');
    var searchList = document.getElementById('search-list');

    console.log(searchList.value)
    var todos;
    var content;
    var maxNum = 1;
    //inputTodo

    var render = function() {
        let html = '';
        todos.forEach(function(todo) {
            const completed = todo.completed ? 'checked' : '';
            html += `<li class="list-group-item">
          <div class="hover-anchor">
            <a class="hover-action text-muted">
                <span class="glyphicon glyphicon-remove-circle pull-right" data-id="${todo.id}">
                </span>
            </a>
            <label class="i-checks" for="${todo.id}">
              <input type="checkbox" id="${todo.id}" ${completed}><i></i>
              <span>${todo.content}</span>
            </label>
          </div>
        </li>`
        });
        todoList.innerHTML = html;
    }

    var addList = function() {
        //maxNum global variable is 1
        if (!todos || todos.length === 0) {
            todos = [{ id: maxNum, content, completed: false }];
        } else {
            maxNum = Math.max.apply(null, todos.map(function(todo) { return todo.id; })) + 1;
            // maxNum += 1;
            todos = [{ id: maxNum, content, completed: false }].concat(todos);
        }
        //Math.max.apply(null, [1,2,3]);
        //[{id:4}].concat(todos); [{id:4},{id:3}....{id:1}]
        console.log('[ADD]', todos);
    }

    var changeCheckbox = function(id) {
        todos = todos.map(function(todo) {
            /*if(todo.id == parseInt(id)){
             return todo = Object.assign({}, todo, {completed:!todo.completed})
            }return todo;*/
            return todo = todo.id === parseInt(id) ?
                Object.assign({}, todo, { completed: !todo.completed }) : todo;
        });
        console.log('[POST]', todos);
        return todos;
    }

    var deleteList = function(id) {
        todos = todos.filter(function(todo) {
            if (todo.id !== parseInt(id)) {
                return todo;
            }
        });
        console.log('[DELETE]', todos);
    };


    window.addEventListener('load', function() {
        todos = [
            { id: 3, content: 'javascript', completed: false },
            { id: 2, content: 'css', completed: true },
            { id: 1, content: 'html', completed: false }
        ]
        render();
    });

    // Math.max.apply(null, )
    // When trigger new dynamic li tag, id must be last number of todos'id,
    // so use Math.max.apply
    inputTodo.addEventListener('keydown', function(e) {
        //if(keycode != 13 && inputTodo.value == '') return;
        if (e.keyCode !== 13) return;
        content = inputTodo.value;
        inputTodo.value = '';
        addList();
        render();
    })


    todoList.addEventListener('change', function(e) {
        var target = e.target;
        //console.log(target.parentNode.nodeName); LABEL
        if (!target || target.parentNode.nodeName !== 'LABEL') return;
        //console.log(typeof target.id); //string
        changeCheckbox(target.id);
        render();

    });

    todoList.addEventListener('click', function(e) {
        var target = e.target;
        if (!target || target.nodeName !== 'SPAN' || target.parentNode.nodeName !== 'A') return;
        //alert(target.parentNode.nodeName);
        //console.log(target.dataset.id) 
        //console.log( typeof target.getAttribute('data-id') );
        //deleteList(target.dataset.id);
        deleteList(target.dataset.id);
        render();
    });


    console.log(todoList.parentNode)
        //content 

    // 검색 기능입니다. 진행중입니다.
    // error가 있습니다.
    searchList.addEventListener('keydown', function(e) {
        if (e.keyCode !== 13) return;
        var searchContent = searchList.value;



        searchList.value = '';

        var resLists = todos.filter(function(todo) {
            if (todo.content === searchContent) {
                return Object.assign({}, todo, { content: searchContent })
            }
        });

        var h2 = document.createElement('h2');
        var searchCount = document.createTextNode(`검색된 결과과 ${resLists.length}개 입니다.`)
        h2.appendChild(searchCount);

        //console.log(h2)
        //h2.appendChild(searchCount);

        if (resLists.length > 0) {
            let html = '';
            resLists.forEach(function(resList) {
                html += `<li class="list-group-item">
                    <div class="hover-anchor">
                        <span style="margin:30px">${resList.content}</span>
                    </div>
                  </li>`
            });

            //`<h2 class="search-count">검색된 결과과 ${resLists.length}개 입니다.</h2>`            
            //todoList.insertBefore(h2, document.getElementsByTagName('li')[0])


            todoList.innerHTML = html;
            todoList.prepend(h2);
        } else { todoList.prepend(h2) }
    });

    /*console.log(todos);
    console.log(todos.length);


    if (resSearch <= 0) return;
    resSearch 
    render();*/




}())


//filter

//map
/*var num = [1,2,3];
      
  num = num.map(function(li){
    if(li == 2){
      return li = 3;
    }
    return li; 
  })
*/
/*
<label for="male">Male</label>
<input type="radio" name="gender" id="male" value="male"><br>
<label for="female">Female</label>
<input type="radio" name="gender" id="female" value="female"><br>
*/
//change method is only works on <input>, <textarea> and <select> elements
// trim
//e.currentTarget = 이벤트가 걸려잇는 위치, 
//e.target = 실제로 이벤트가 발생된 위치