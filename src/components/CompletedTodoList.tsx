import React from "react";

import styles from '../styles/main.module.css';
import TodoType from "../models/todo_type";
import TodoItem from "./TodoItem";

const CompletedTodoList: React.FC<{ items: TodoType[], reEnterHandler: (id: string) => void }> = (props) => {
    const reEnterTodoHandler = (id: string) => {
        props.reEnterHandler(id)
    }

    return (
        <ul className={styles['todo-list']}>
            {props.items.length === 0 && <h3>Yet to complete a To-Do</h3>}
            {props.items.length !== 0 && props.items
                .map((todo) => 
                    <TodoItem key={todo.id} todo={todo} changeToDoHandler={reEnterTodoHandler} checked={true}/>
                )
            }
        </ul>
    )
}

export default CompletedTodoList;