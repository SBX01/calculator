import { Component } from "react";
import './style.css'

class Mathdisplay extends Component{
    render(){
        const {valueDisplay} = this.props
        return(
            <span className="view">
                {valueDisplay}
            </span>
        )
    }
}

export default Mathdisplay;