import { Component } from "react";
import Mathdisplay from '../mathDisplay/mathdisplay';
import Keypad from '../keypad/keypad'
import './style.css'

class Calculator extends Component{
   
    render(){
        const {
            keys,
            handleDigitClick,
            valueDisplay,
            handleOperatorClick
            ,handleEqualClick
            ,handleClearClick
        } = this.props
        return(
            <div className="calculator">
                <Mathdisplay
                valueDisplay={valueDisplay}
                ></Mathdisplay>
                <Keypad
                handleDigitClick={handleDigitClick}
                handleOperatorClick={handleOperatorClick}
                handleEqualClick={handleEqualClick}
                handleClearClick={handleClearClick}
                keys={keys}></Keypad>
            </div>
        )
    }
}

export default Calculator;