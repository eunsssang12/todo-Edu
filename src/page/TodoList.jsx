import React from 'react';

// Todo 목록을 표시하고 삭제 기능을 가진 컴포넌트
const TodoList = ({ todos, deleteTodo }) => {
    return (
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  };

export default TodoList