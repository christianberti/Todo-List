import React from 'react'

const Todo = ({text, id, complete, deleteTask, completeTask}) => {

  return (
    <div className='todo'>
      <li className={complete ? 'todo-item completed' : 'todo-item'}>
        {text}
      </li>
        <button className='complete-btn' onClick={()=> completeTask(id)}>
          <i className='fas fa-check'></i>
        </button>
        <button className='trash-btn' onClick={()=> deleteTask(id)}>
          <i className='fas fa-trash'></i>
        </button>
    </div>
  )
}

export default Todo