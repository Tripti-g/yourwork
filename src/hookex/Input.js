import React from 'react';
import useInputHook from './hooks/useInputHook'
const Input = () => {
    const [Todo, setTodo] = useInputHook();
    return [
        <input type="text" value={Todo} onChange={setTodo} />,
        <button onClick={() => { setTodoList(Todo) }}>Submit</button>
    ];
}

export default Input;
