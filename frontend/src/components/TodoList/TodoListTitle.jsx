import React from 'react'
import { todoContext } from '../../App'
import './TodoListTitle.scss'



function TodoListTitle () {
    const {todos} = React.useContext(todoContext) 
    const stat = React.useMemo(()=>{
        const totalTodosCount = todos.length
        const completedTodosCount = todos.filter(todo=> todo.completed).length
        return {totalTodosCount, completedTodosCount}
       
    }, [todos])
    return(
       <div className='TodoListTitle'>
            <div className="total-todo">
                <div className='text'>General tasks</div>
                <div className="count">{stat.totalTodosCount}</div>
            </div>
            <div className='completed-todo'>
                <div className="text">Completed</div>
                <div className="count">{stat.completedTodosCount}/{stat.totalTodosCount}</div>
            </div>
       </div>
    )
}


export default TodoListTitle