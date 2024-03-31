// UseMemo.js
import React, { useMemo } from 'react';

const UseMemo = ({ todos }) => {
  const formattedTodos = useMemo(() => todos.map(todo => <li key={todo}>{todo}</li>), [todos]);

  return (
    <div>
      <h2>Tasks</h2>
      <ul>{formattedTodos}</ul>
    </div>
  );
};

export default UseMemo;
