import React from 'react';

import Todo from "../components/Todo";
import TodoStore from "../store/TodoStore";
import * as TodoActions from "../actions/TodoActions";

export default class Featured extends React.Component{
    constructor(){
        super();
        this.state = {
          todos: TodoStore.getAll(),
        };
    }

    componentWillMount(){
        TodoStore.on("change",() =>{
           this.setState({
              todos:TodoStore.getAll(),
           });
        });
    }


    render(){
        const { todos } = this.state;
        const TodoComponents = todos.map((todo)=>{
           return <Todo key={todo.id} {...todo}/>;
        });

        return(
            <div>
                <button onClick={this.createTodo.bind(this)}>Create</button>
                <h2>Fuel manager</h2>
                <ul>{TodoComponents}</ul>
            </div>
        );
    }
}