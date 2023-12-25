import React, { useReducer, useState } from 'react';
import todoReducer from './components/Reducer'
// import TodoList from './page/TodoList';
// import TodoForm from './page/TodoForm';
// import { useRoutes } from "react-router-dom"
// import { routes } from "./routes.tsx"

// Reducer 함수: 투두 상태를 관리하는 함수

// Todo 입력 폼을 담당하는 컴포넌트
const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  // 폼 제출 시 실행되는 함수
  const handleSubmit = e => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

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

// 전체 애플리케이션을 관리하는 부모 컴포넌트
const App = () => {
  // useReducer를 사용하여 상태와 액션을 관리
  const [todos, dispatch] = useReducer(todoReducer, []);

  // 새로운 투두 추가 액션을 호출하는 함수
  const addTodo = text => {
    dispatch({ type: 'ADD_TODO', payload: text });
  };

  // 특정 투두 삭제 액션을 호출하는 함수
  const deleteTodo = id => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;