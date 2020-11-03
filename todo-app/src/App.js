import React, {Component} from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';

class App extends Component {
  
  state = {
    todos : [
      {id: 1, content: 'make a bed'},
      {id: 2, content: 'washing clothes'}
    ]
  };

  addTodo = (todo) => {
    todo.id = Math.random();
    const todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return(
        todo.id !== id
      );
    });

    this.setState({
      todos
    });
  };

  render() {
    return(
      <div className="app container" >
        <h4 className="center blue-text">Todo's</h4>
        <Todo todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  };
}

export default App;