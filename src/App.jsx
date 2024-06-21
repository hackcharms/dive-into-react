import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState(["todo1", "todo2", "todo3"]);
  const [todoTitle, setTodoTitle] = useState("");
  function updateTodoTitle(event) {
    // console.log(event);
    setTodoTitle(event.target.value);
  }
  function addTodo() {
    if (!todoTitle) return;
    setTodos([...todos, todoTitle]);
    setTodoTitle("");
  }
  function deleteTodo(todoTitle) {
    setTodos(todos.filter((todo) => todo != todoTitle));
    // console.log(todoTitle);
  }
  return (
    <div className="main-wrapper">
      <div className="main">
        <h1>My Todos</h1>
        <div>
          <input type="text" value={todoTitle} onChange={updateTodoTitle} />
          <button onClick={addTodo}>Add todo</button>
        </div>
        <div>
          <ul style={{ listStyle: "none" }}>
            {todos.map((todo, index) => {
              return (
                <Todo
                  onClick={() => deleteTodo(todo)}
                  title={todo}
                  key={todo}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
function Todo({ title, onClick }) {
  return (
    <>
      <div className="todo-wrapper">
        <span className="title">{title}</span>
        <button onClick={onClick}>Remove</button>
      </div>
    </>
  );
}