import React from "react";

import TodoType from "../models/todo_type";

const TodoItem: React.FC<{ todo: TodoType, changeToDoHandler: (id: string) => void, checked: boolean }> = (props) => {

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.changeToDoHandler(e.target.value)
    }

    return (
        <li>
            <input
                type="checkbox"
                id={props.todo.id}
                value={props.todo.id}
                onChange={changeHandler}
                checked={props.checked}
            />
            <label htmlFor={props.todo.id}>
                {props.todo.todo}
            </label>
        </li>
    )
}

export default TodoItem;