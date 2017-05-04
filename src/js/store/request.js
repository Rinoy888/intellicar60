import React from 'react';
import axios from 'axios';
import Popup from 'react-popup';
import Todo from "../components/Todo";
import TodoStore from "../store/TodoStore";
import * as TodoActions from "../actions/TodoActions";
// require('../../sass/dash.scss');
// require('../../sass/grid.scss');
// require('../../sass/dashboard.scss');
require('../../sass/request.scss');



export default class Featured extends React.Component{
    constructor(){
        super();
        this.state = {
            todos: TodoStore.getAll(),

        };
    }


    createTodo(){
        console.log("clicked");
        TodoActions.createTodo(Date.now());
    }

    render(){

        // setTimeout(() => {
        //     this.componentDidMount();
        // },1000)
        console.log(this.state.users)
        console.log(this.state.fueldata)

        const { todos } = this.state;
        const TodoComponents = todos.map((todo)=>{
            return <Todo key={todo.id} {...todo}/>;
        });
        return(
            <div className="box"></div>
        );

    }
}

























// export default class Featured extends React.Component{
//     constructor(){
//         super();
//
//             axios.get('http://swapi.co/api/people').then(function(results){
//                 console.log(results)
//
//             }
//
//
//
//
//
//
//     render(){
//         return(
//             <div>
//
//                 <h2>Fdkjsnbclkjdsnc</h2>
//             </div>
//         );
//     }
// }

