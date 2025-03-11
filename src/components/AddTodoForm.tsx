import React, { useRef } from 'react';

import styles from '../styles/main.module.css'

const AddTodoForm: React.FC<{ addToTodoList: (text: string) => void }> = (props) => {
    const enteredTodoRef = useRef<HTMLInputElement>(null);

    const formSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();

        const enteredVal = enteredTodoRef.current!.value;
        props.addToTodoList(enteredVal);

        enteredTodoRef.current!.value = '';
    }

    return (
        <div className={styles['form-wrapper']}>
            <form onSubmit={formSubmitHandler}>
                <input type="text" placeholder='Enter a Todo' name='to-do' ref={enteredTodoRef} />
            </form>
        </div>
    )
}

export default AddTodoForm;