import {EventEmitter} from "events";
import dispatcher from "../dispatcher";
import TodoActions from "../actions/TodoActions";

class TodoStore extends EventEmitter{
    constructor(){
        super();
        this.todos = [
            {
                id:100,
                text:"fuel1",
                complete:false
            },
            {
                id:200,
                text:"mile5",
                complete:false
            },
        ];
    }

    createTodo(text){
        const id = Date.now();

        this.todos.push({
            id,
            text,
            complete:false,
        });
        this.emit("change");
    }
    getAll(){
        return this.todos;
    }

    handleActions(action){
        switch(action.type){
            case "CREATE_TODO": {
                this.createTodo(action.text);
            }
        }
    }
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));
window.dispatcher = dispatcher;
export default todoStore;