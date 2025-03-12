import { useEffect, useState } from 'react';

import TodoType from './models/todo_type';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import styles from './styles/main.module.css';
import CompletedTodoList from './components/CompletedTodoList';

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [completedTodos, setCompletedTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    const yetToDone: string | null = localStorage.getItem('yettodone');
    if (yetToDone) {
      setTodos(JSON.parse(yetToDone));
    } 
  }, []);

  useEffect(() => {
    const completed: string | null = localStorage.getItem('completed');
    if (completed) {
      setCompletedTodos(JSON.parse(completed))
    }
  }, [])

  const addToTodoListHandler = (text: string) => {
    const newTodo = new TodoType(text);
    localStorage.setItem('yettodone', JSON.stringify([...todos, newTodo]));
    setTodos((prev) => [...prev, newTodo]);
  }

  const removeTodoHandler = (id: string) => {
    const toBeRemoved = todos.find((todo) => todo.id === id);

    if (toBeRemoved) {
      const newCompletedTodos = [toBeRemoved, ...completedTodos]
      localStorage.setItem('completed', JSON.stringify(newCompletedTodos));
      setCompletedTodos(newCompletedTodos);
    }

    const remainingTodos: TodoType[] = todos.filter((todo) => todo.id !== id);
    localStorage.setItem('yettodone', JSON.stringify(remainingTodos));
    setTodos(remainingTodos);
  }

  const reEnterTodoHandler = (id: string) => {
    const toBeEnter = completedTodos.find((completedTodo) => completedTodo.id === id);

    if (toBeEnter) {
      const newTodos: TodoType[] = [...todos, toBeEnter];
      localStorage.setItem('yettodone', JSON.stringify(newTodos));
      setTodos(newTodos);
    }

    const modifiedCompletedTodos: TodoType[] = completedTodos.filter((todo) => todo.id !== id);
    localStorage.setItem('completed', JSON.stringify(modifiedCompletedTodos));
    setCompletedTodos(modifiedCompletedTodos);
  }

  const deleteTodoHandler = (id: string) => {
    const remainingTodos: TodoType[] = todos.filter((todo) => todo.id !== id);
    localStorage.setItem('yettodone', JSON.stringify(remainingTodos));
    
    const modifiedCompletedTodos: TodoType[] = completedTodos.filter((todo) => todo.id !== id);
    localStorage.setItem('completed', JSON.stringify(modifiedCompletedTodos));

    setTodos(remainingTodos);
    setCompletedTodos(modifiedCompletedTodos);
  }

  return (
    <div className={styles['main-wrapper']}>
      <div className={styles['main']}>
        <AddTodoForm addToTodoList={addToTodoListHandler} />
        <TodoList items={todos} removeHandler={removeTodoHandler} deleteHandler={deleteTodoHandler}/>
        <hr></hr>
        <CompletedTodoList items={completedTodos} reEnterHandler={reEnterTodoHandler} deleteTodoHandler={deleteTodoHandler}/>
      </div>
    </div>
  )
}

export default App
