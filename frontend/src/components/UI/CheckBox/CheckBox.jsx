import './CheckBox.scss'
import checkedImage from '../../../assets/checked.png'


function CheckBox () {
    return(
       <div className='CheckBox CheckBox-checked'>
            <img className='checked-icon' src={checkedImage} alt="checked" />
       </div>
    )
}


export default CheckBox