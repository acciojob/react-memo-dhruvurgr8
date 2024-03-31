// ReactMemo.js
import React from 'react';

const ReactMemo = React.memo(({ counter }) => {
  return (
    <div>
      <h2>Counter</h2>
      <p>{counter}</p>
    </div>
  );
});

export default ReactMemo;
