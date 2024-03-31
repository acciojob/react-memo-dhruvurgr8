// App.js
import React, { useState } from 'react';
import UseMemo from './UseMemo';
import ReactMemo from './ReactMemo';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [todos, setTodos] = useState(["Task 1", "Task 2"]);

  const handleAddTodo = () => {
    setTodos(prevTodos => [...prevTodos, "New todo"]);
  };

  const handleIncrement = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  const handleCustomTask = (e) => {
    const task = e.target.value;
    if (task.length > 5) {
      setTodos(prevTodos => [...prevTodos, task]);
    }
  };

  return (
    <div>
        <h1>My todos</h1>
      <button id="add-todo-btn" onClick={handleAddTodo}>Add todo</button>
      <button id='incr-cnt' onClick={handleIncrement}>Increment</button>
      <input id='skill-input' type="text" placeholder="Enter task" onBlur={handleCustomTask} />
      <UseMemo todos={todos} />
      <ReactMemo counter={counter} />
    </div>
  );
};

export default App;
