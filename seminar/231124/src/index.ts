// interface Todo {
//   id: number;
//   title: string;
//   done: boolean;
// }

type Todo = {
  id: number;
  title: string;
  done: boolean;
}

let todoItems: Todo[] = [];

// api
function fetchTodoItems(): Todo[] {
  return [
    {id: 1, title: "안녕", done: false},
    {id: 2, title: "타입", done: false},
    {id: 3, title: "스크립트", done: false},
  ];
}

// crud methods
function fetchTodos(): Todo[] {
  return fetchTodoItems();
}

function addTodo(todo: Todo) {
  todoItems.push(todo);
}

function deleteTodo(index: number) {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: Todo) {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo() {
  return todoItems[0];
}

function showCompleted() {
  return todoItems.filter(item => item.done);
}

function addTwoTodoItems() {
  addTodo({id: 4, title: "title4", done: true});
  addTodo({id: 5, title: "title5", done: false});
}

// NOTE: 유틸 함수
function log() {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();