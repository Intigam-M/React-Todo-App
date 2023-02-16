import Checkbox from '../UI/CheckBox/CheckBox'
import './Todo.scss'
import removeImage from '../../assets/trash.png'



function Todo ({content, completed, onChecked, onDelete}) {
    return(
       <div className='Todo'>
            <div className="checkbox-div">
                <Checkbox onChecked={onChecked} completed={completed} />
            </div>
            <div className={"content "+ (completed ? "content-checked" : "")}>
               {content}
            </div>
            <div className="trash-div">
                <img onClick={onDelete} src={removeImage} alt="remove" />
            </div>
       </div>
    )
}


export default Todo