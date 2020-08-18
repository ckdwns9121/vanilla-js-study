const todo_form = document.querySelector('.js-todo-form'),
    todo_input = todo_form.querySelector('input'),
    todo_list = document.querySelector('.js-todo-list');

const TODOS_LS ="todos";
let todos = [];

function deleteTodo(e){
  const btn = e.target;
  const li = btn.parentNode;
  todo_list.removeChild(li);
  const delTodo = todos.filter(function(todo){
      console.log( todo.id !== parseInt(li.id));
      return todo.id !== parseInt(li.id)
  })
  todos=delTodo;
  console.log(todos);
  saveTodos();
}

function saveTodos (){
    const list = JSON.stringify(todos);
    localStorage.setItem(TODOS_LS,list);
}

function paintTodo(text){
    console.log(text);
    const li = document.createElement("li");
    const id = todos.length+1;
    li.id = id;
    const delBtn = document.createElement("button");
    delBtn.classList.add("del-btn")
    delBtn.innerText="❌";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    delBtn.addEventListener("click",deleteTodo);
    todo_list.appendChild(li);
    const todo ={
        text : text,
        id : todos.length+1,
    }

    todos.push(todo);
    console.log(todos);
    saveTodos();
}

function loadTodos(){
    const load_todos = localStorage.getItem(TODOS_LS);
    console.log(load_todos);
    if(load_todos!==null){
        const parse_todo = JSON.parse(load_todos);
        console.log(parse_todo);
        parse_todo.forEach(function(todo){
           paintTodo(todo.text)
        })
    }

}

function handleSubmit(e){
    e.preventDefault();
    const currentValue = todo_input.value;
    paintTodo(currentValue);
    todo_input.value="";

}

function init(){
    loadTodos();
    todo_form.addEventListener("submit",handleSubmit);
}

init();
