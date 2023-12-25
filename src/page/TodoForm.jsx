import { useState } from "react";

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
export default TodoForm