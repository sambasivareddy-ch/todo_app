import { useState } from 'react';

import TodoType from './models/todo_type';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import styles from './styles/main.module.css';
import CompletedTodoList from './components/CompletedTodoList';

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [completedTodos, setCompletedTodos] = useState<TodoType[]>([]);

  const addToTodoListHandler = (text: string) => {
    const newTodo = new TodoType(text);
    setTodos((prev) => [...prev, newTodo])
  }

  const removeTodoHandler = (id: string) => {
    const toBeRemoved = todos.find((todo) => todo.id === id);
    if (toBeRemoved) {
      setCompletedTodos((prev) => [toBeRemoved, ...prev]);
    }
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const reEnterTodoHandler = (id: string) => {
    const toBeEnter = completedTodos.find((completedTodo) => completedTodo.id === id);
    if (toBeEnter) {
      setTodos((prev) => [...prev, toBeEnter]);
    }
    setCompletedTodos(completedTodos.filter((todo) => todo.id !== id));
  }

  return (
    <div className={styles['main-wrapper']}>
      <div className={styles['main']}>
        <AddTodoForm addToTodoList={addToTodoListHandler} />
        <TodoList items={todos} removeHandler={removeTodoHandler} />
        <hr></hr>
        <CompletedTodoList items={completedTodos} reEnterHandler={reEnterTodoHandler} />
      </div>
    </div>
  )
}

export default App
