import React from 'react';

const Todo = ({todos, deleteTodo}) => {

    const handleClick = (id) => {
        deleteTodo(id)
    }

    const todoList = todos.length? todos.map(todo => {
    return (
        <div className="collection-item" key={todo.id}>
            <span>{todo.content}</span><a href="#!" onClick={() => { handleClick(todo.id) }} className="secondary-content"><i className="material-icons">clear</i></a>
        </div>
    )
    }) : <p className="center">you should have something to do :(</p>

    return(
        <div className="todo-list collection">
            {todoList}
        </div>
    );
};

export default Todo;