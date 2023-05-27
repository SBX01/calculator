import { Component } from "react";
import Mathdisplay from '../mathDisplay/mathdisplay';
import './style.css'

class Calculator extends Component{
    render(){
        return(
            <div className="calculator">
                <Mathdisplay>

                </Mathdisplay>
            </div>
        )
    }
}

export default Calculator;