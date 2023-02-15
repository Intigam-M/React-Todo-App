import './AddTodo.scss'
import plus from '../../assets/plus.svg'

function AddTodo() {
    return(
        <>
            <input className='add-todo-input' type="text" placeholder='Add task'/>
            <div  className='add-todo-button'>
                <div>Add</div>
                <img src={plus} alt="add" />
            </div>
        </>
    )
}


export default AddTodo