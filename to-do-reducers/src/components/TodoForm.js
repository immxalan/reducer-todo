import React, { Component } from "react";

class TodoForm extends Component {
    constructor(){
        super()
        this.state = {
            newItem: ""
        }
    }
    handleChanges = element => {
        this.setState({
            newItem: element.target.value
        })
    }
    handleSubmit = element => {
        element.preventDefault();
        this.props.addItem(this.state.newItem);
        this.setState({newTodo: ""});
    }

  
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="item" placeholder="...todo" value={this.state.newItem} onChange={this.handleChanges}/>
                <button>Add Todo</button>
            </form>
            
        );
    }
};

export default TodoForm;