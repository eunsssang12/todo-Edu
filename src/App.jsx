// App.js

// import React, { useReducer } from 'react';
// import styled from "styled-components";
// import todoReducer from './components/Reducer';
// import TodoList from './components/TodoList';
// import TodoForm from './components/TodoForm';

// const Div = styled.div`
//   color: black;
//   background: skyblue;
//   box-sizing: border-box;
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `

// const H1 = styled.h1`
// `

// const App = () => {
//   const [todos, dispatch] = useReducer(todoReducer, []);

//   const addTodo = text => {
//     dispatch({ type: 'ADD_TODO', payload: text });
//   };

//   const deleteTodo = id => {
//     dispatch({ type: 'DELETE_TODO', payload: id });
//   };

//   // 새로운 투두 텍스트를 받아서 편집 액션을 디스패치하는 함수
//   const editTodo = (id, newText) => {
//     dispatch({ type: 'EDIT_TODO', payload: { id, text: newText } });
//   };

//   return (
//     <Div>
//       <H1>Todo App</H1>
//       <TodoForm addTodo={addTodo} />
//       <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
//     </Div>
//   );
// };

// export default App;

import  { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([  
    { id: 1, text: '할 일 1', isEditing: false },
    { id: 2, text: '할 일 2', isEditing: false },
    // 추가적인 투두 아이템들...
  ]);

  const handleEditToggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : { ...todo, isEditing: false }
      )
    );
  };

  const handleEditSave = (id, newText) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText, isEditing: false } : todo
      )
    );
  };

  const handleEditKeyDown = (id, event) => {
    // 엔터 키를 눌렀을 때 편집을 완료합니다.
    if (event.key === 'Enter') {
      event.preventDefault();
      handleEditSave(id, event.target.value);
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: '10px' }}>
            {todo.isEditing ? (
              <>
           <input
           type="text"
            value={todo.text}
            onChange={(e) => setTodos((prevTodos) => prevTodos.map((t) => (t.id === todo.id ? { ...t, text: e.target.value } : t)))}
            onKeyDown={(e) => handleEditKeyDown(todo.id, e)}
            style={{ marginRight: '5px' }}
            /> 
            <button onClick={() => handleEditSave(todo.id, todo.text)}>
              저장
            </button>

              </>
            ) : (
              <>
                <span style={{ marginRight: '5px' }}>{todo.text}</span>
                <button onClick={() => handleEditToggle(todo.id)}>편집</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
