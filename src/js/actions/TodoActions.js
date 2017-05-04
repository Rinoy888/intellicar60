import dispatcher from  "../dispatcher";
import axios from 'axios';

export function createTodo(text) {
    dispatcher.dispatch({
        type: "CREATE_TODO",
        text,
    });
}
export function deleteTodo(text) {
    dispatcher.dispatch({
       type:"DELETE_TODO",
        text,
    });
}
export function getdatarate(text) {
    dispatcher.dispatch({
       type:"GETDATARATE",
        text,
    });
}
export function fetchdata(){

            axios.get(`http://localhost:1234/api/widget/getdatarate`)
            .then(response => {
               data:response
            })
            return data;
}