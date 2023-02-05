import React from 'react'
import Todo from './Todo'

const TodoList = ({todoList, setTodoList, filteredTodos}) => {

  const deleteTask = (id) => {
    const filteredList = todoList.filter((todo)=> todo.id !== id)

    setTodoList(filteredList)
  }

  const completeTask = (id) => {
    const mapList = todoList.map((todo)=> todo.id === id 
    ? {...todo, complete: !todo.complete}
    : todo)
    
    setTodoList(mapList)
  }

  return (
    <div className='todo-container'>
        <ul className='todo-list'>
            {filteredTodos.map((todo) => (
              <Todo
                key={todo.id} 
                text={todo.text} 
                id={todo.id}
                complete={todo.complete}
                deleteTask={deleteTask}
                completeTask={completeTask}
              />
            ))}
        </ul>
    </div>
  )
}

export default TodoList