import { Component }from 'react'
import KeyButton from './keyButton'
import './style.css'

class Keypad extends Component{
    render(){
        const {keys ,handleDigitClick,handleOperatorClick,handleEqualClick,handleClearClick} = this.props
        return(
            <div className='key-container'>
                <KeyButton
                handleDigitClick={handleDigitClick}
                handleOperatorClick={handleOperatorClick}
                handleEqualClick={handleEqualClick}
                handleClearClick={handleClearClick}
                keys={keys}></KeyButton>
            </div>
        )
    }
}

export default Keypad