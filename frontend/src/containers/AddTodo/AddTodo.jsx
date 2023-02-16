import './AddTodo.scss'
import plus from '../../assets/plus.svg'
import React from 'react'

function AddTodo({onAddTodo}) {
    const inputRef = React.useRef(null)
    const submitHandler = React.useCallback(()=>{
        const content = inputRef.current.value
        onAddTodo(content)
        inputRef.current.value=''
    }, [onAddTodo])

    return(
        <>
            <input ref={inputRef} className='add-todo-input' type="text" placeholder='Add task' onKeyDown={e=>e.key === 'Enter' && submitHandler()}/>
            <div  className='add-todo-button' onClick={submitHandler} >
                <div>Add</div>
                <img src={plus} alt="add" />
            </div>
        </>
    )
}


export default AddTodo