import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

import TodoType from "../models/todo_type";

const TodoItem: React.FC<{ todo: TodoType, changeToDoHandler: (id: string) => void, checked: boolean, deleteToDoHandler: (id: string) => void }> = (props) => {

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.changeToDoHandler(e.target.value)
    }

    const deleteHandler = (e: React.FormEvent<HTMLButtonElement>) => {
        props.deleteToDoHandler(e.currentTarget.value);
    }

    return (
        <li>
            <button value={props.todo.id} onClick={deleteHandler}>
                <DeleteIcon/>
            </button>
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
