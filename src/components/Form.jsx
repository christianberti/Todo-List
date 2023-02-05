
const Form = ({inputText, setInputText, todoList, setTodoList, setStatus}) => {

    const handleInputText = (e) => {
        const inputText = e.target.value

        setInputText(inputText)
    }

    const handleClick = (e) => {
        e.preventDefault()

        setTodoList([...todoList, {text: inputText, complete: false, id: Date.now()}])
        setInputText("")
    }

    const handleStatus = (e) => {
        setStatus(e.target.value)
    }

  return (
    <form>
        <input
            onChange={handleInputText}
            type="text" className='todo-input'
            placeholder="Add a task"
            value={inputText}
        />
        <button className='todo-button' type='submit' onClick={handleClick}>
            <i className="fas fa-plus-square"></i>
        </button>
        <div className='select'>
            <select 
                onChange={handleStatus}
                name='todos' 
                className='filter-todo'
            >
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    </form>
  )
}

export default Form