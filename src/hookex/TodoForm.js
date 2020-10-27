import React, { useState } from 'react';
import ShowTodo from './ShowTodo'
import Input from './Input'
const TodoForm = () => {
    const [TodoList, setTodoList] = useState(['games', 'fruits']);
    return (
        <>
            <form onSubmit={(e) => { e.preventDefault(); setTodoList() }} >
                <Input />
            </form>
            <ShowTodo name={TodoList} />
        </>
    );
}

export default TodoForm;


  // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(Todo)
    //     console.log([...TodoList])
    //     setTodoList([...TodoList, Todo])
    //     console.log([...TodoList])
    // }