import { useEffect, useState } from 'react';
import './App.css'
import Form from './components/Form'
import TodoList from './components/TodoList'

const App = () => {


  const [inputText, setInputText] = useState("");

  const [todoList, setTodoList] = useState([])

  const [status, setStatus] = useState('all')

  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    getLocalTodos()
  }, [])

  useEffect(() => {
    handleFilter();
    saveLocalTodos();
  }, [todoList, status])

  const handleFilter = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todoList.filter(todo => todo.complete === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todoList.filter(todo => todo.complete === false));
        break;
      default:
        setFilteredTodos(todoList);
        break;
    }
  };

  const saveLocalTodos = () => {
    if(todoList.length>0) {
    localStorage.setItem('todoList', JSON.stringify(todoList))
    }
  }

  const getLocalTodos = () => {
    if(localStorage.getItem('todoList') === null) {
      localStorage.setItem('todoList', JSON.stringify([]))
    } else {
      const todoLocal = JSON.parse(localStorage.getItem('todoList'));
      setTodoList(todoLocal);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>My Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todoList={todoList}
        setTodoList={setTodoList}
        setStatus={setStatus}
      />
      <TodoList 
        todoList={todoList} 
        setTodoList={setTodoList}
        filteredTodos={filteredTodos}
      />
    </div> 
  )
}

export default App
