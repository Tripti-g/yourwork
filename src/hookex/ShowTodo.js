import React from 'react';

const ShowTodo = (props) => {
    console.log(props)
    // const todos = props.name.map((todo,i) => (
    //     <li key={i}>{todo}</li>
    // ))
    return (
        <ul>
            {/* {todos} */}
            <li>this is todo list</li>
        </ul>
    );
}

export default ShowTodo;
