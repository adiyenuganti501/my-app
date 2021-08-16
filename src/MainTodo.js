import React, { useState } from 'react';

import './Todo.css';
import TodoList from './TodoList';

function MainTodo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const changeHandler = e => {
    setTask(e.target.value);
  }

  const deleteHandler = (delkey) => {
    const deltodo = todos.filter((todo, index) => index !== delkey)
    setTodos(deltodo);
    console.log(deltodo)
  }
  const submitHandler = e => {
    e.preventDefault();
    if (task || task.length > 0) {
      console.log(task)
      const newTodos = [...todos, task];

      setTodos(newTodos);
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <div className="card">
          <div className="cardbody">
            <h3>TODO Management Application</h3>
            <form onSubmit={submitHandler}>
              <input type="text" name="task" value={task} onChange={changeHandler} /> &nbsp;&nbsp;
              <input type="submit" />
            </form>
            <TodoList todovalues={todos} deleteHandler={deleteHandler} />
          </div>

        </div>

      </header>
    </div>
  );
}

export default MainTodo;
