import './TodoListTitle.scss'



function TodoListTitle () {
    return(
       <div className='TodoListTitle'>
            <div className="total-todo">
                <div className='text'>General tasks</div>
                <div className="count">5</div>
            </div>
            <div className='completed-todo'>
                <div className="text">Completed</div>
                <div className="count">2/5</div>
            </div>
       </div>
    )
}


export default TodoListTitle