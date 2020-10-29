import React, {Component} from "react";

class AddTodo extends Component {
    state = {
        content: ''
    };

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: '' 
        });
    };

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <i className="material-icons prefix blue-text">add_circle_outline</i>
                        <input onChange={this.handleChange} type="text" value={this.state.content} />
                    </div>
                </form>
            </div>
        );
    };
};

export default AddTodo;