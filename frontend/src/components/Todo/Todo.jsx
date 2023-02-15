import Checkbox from '../UI/CheckBox/CheckBox'
import './Todo.scss'
import removeImage from '../../assets/trash.png'



function Todo () {
    return(
       <div className='Todo'>
            <div className="checkbox-div">
                <Checkbox />
            </div>
            <div className="content content-checked">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
            <div className="trash-div">
                <img src={removeImage} alt="remove" />
            </div>
       </div>
    )
}


export default Todo