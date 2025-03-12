import React from "react";

import TodoType from "../models/todo_type";
import TodoItem from "./TodoItem";
import styles from '../styles/main.module.css'

const TodoList: React.FC<{ items: TodoType[], removeHandler: (id: string) => void, deleteHandler: (id: string) => void }> = (props) => {
    const removeTodoItem = (id: string) => {
        props.removeHandler(id)
    }

    const deleteTodoItem = (id: string) => {
        props.deleteHandler(id);
    }

    return (
        <ul className={styles['todo-list']}>
            {props.items.length === 0 && <h3>Hurray! No To-Dos to Do</h3>}
            {props.items.length !== 0 && props.items
                .map((todo) => 
                    <TodoItem key={todo.id} todo={todo} changeToDoHandler={removeTodoItem} checked={false} deleteToDoHandler={deleteTodoItem}/>
                )
            }
        </ul>
    )
}

export default TodoList;
