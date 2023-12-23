import { useReducer, useState } from 'react';

// useRef 란 저장공간 또는 DOM요소에 접근하기 위해 사용되는 React Hook을 뜻한다
// useReducer 이란 useState와 약간 비슷한 hook이다 더 많은 기능이 있고 더 복잡한 state에 특히 유용하다.


// Reducer 함수: 투두 상태를 관리하는 함수
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.payload }];
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};

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
        placeholder="할일을 적어 주세요"
      />
      <button type="submit">추가</button>
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
