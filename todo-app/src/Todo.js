import React from 'react';

const Todo = ({todos, deleteTodo}) => {
    const todoList = todos.length? todos.map(todo => {
        return(
            <div className="collection-item" key={todo.id}>
                <span>{todo.content}<a href ="#!" className="secondary-content"><i onClick={() => {deleteTodo(todo.id)}} className="material-icons">clear</i></a></span>
            </div>
        );
    }) : <p className="center">You should have something to do :(</p>
    return(
        <div className="collection">
            {todoList}
        </div>
    );
}

export default Todo;