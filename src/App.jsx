import { useReducer, useRef, useState } from 'react'


function App() {
  const [inputs, setInputs] = useState({
    contant : String,
    check : Boolean,
  })
  const { contant, check } = inputs;

const onChange = e => {
  settodo(e.target.value)
  const { name, value } = e.target;    
  setInputs({      
    ...inputs,      
    [name]: value    
  });  
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
  }
};

const [users, setUsers] = useState([
  {
    id : Number,
    contant: String,
    check: Boolean,
  },
]);


  const [todo, settodo] = useState("");
  const [state, dispatch] = useReducer(reducer, users);

  const nextId = useRef(2);  
  const onCreate = (e) => {
    e.preventDefault();

    const users = {
      id: nextId.current,
      contant,
      check,
    }    
    setUsers(users.concat(users));
    setInputs({      
      contant: '',      
      check: '',      
    });
    nextId.current += 1;  

    dispatch({
      type: "add_todo",
      name: "이지은"
    });
  };

  return (
      <div>
        <form onSubmit={onCreate}>
          <input type='text' placeholder='할일을 입력해주세요' onChange={onChange} value={todo}></input>
          <button type='submit'>제출</button>
          <ul>
            {state.map((item) =><li key={item.id}>{item.contant}</li>)}
          </ul>
        </form>
      </div>
  )
}

export default App
