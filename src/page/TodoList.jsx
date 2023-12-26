
import styled from "styled-components";

const Ul = styled.ul`
list-style-type: decimal;
`
const Li = styled.li` 
    font-weight: bold; 
    color : black;  
    padding: 10px;
`
const Button = styled.button`
    margin-left: 15px;
    padding: 10px;
`
// Todo 목록을 표시하고 삭제 기능을 가진 컴포넌트
const TodoList = ({ todos, deleteTodo }) => {
    return (
      <Ul>
        {todos.map(todo => (
          <Li key={todo.id}>
            {todo.text}
            <Button onClick={() => deleteTodo(todo.id)}>Delete</Button>
          </Li>
        ))}
      </Ul>
    );
  };

export default TodoList