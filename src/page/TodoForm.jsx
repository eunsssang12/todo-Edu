import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`

`
const Input = styled.input`
    padding: 10px;
`
const Button = styled.button`
    margin: 15px;
`
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
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Add a new todo"
        />
        <Button type="submit">Add Todo</Button>
      </Form>
    );
  };
export default TodoForm