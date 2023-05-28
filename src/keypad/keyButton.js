import {Component} from 'react';
import './style.css'
class KeyButton extends Component{
    buttonclickHandle = (key) =>{
        const {handleDigitClick,handleOperatorClick,handleEqualClick,handleClearClick} = this.props
        if (typeof key === 'number') {
            // Hacer algo si se hizo clic en un número
            handleDigitClick(key)
            console.log('Número clickeado:', key);
          } else {
            // Hacer algo si se hizo clic en un símbolo
            switch (key) {
                case '+':
                    handleOperatorClick(key)
                break;
                case '-':
                    handleOperatorClick(key)
                break;
                case '*':
                    handleOperatorClick(key)
                break;
                case '/':
                    handleOperatorClick(key)
                break; 
                case '=':
                    handleEqualClick(key)
                break;    
                case 'C':
                    handleClearClick(key)
                break;            
                default:
                    handleDigitClick(key)
                    break;
            }
            console.log('Símbolo clickeado:', key);
        }
    }
    render(){
        const {keys } = this.props
        return(
            <div className='keypad-buttons'>
            {keys.map((key) => (
                 <button key={key} onClick={() => this.buttonclickHandle(key)}>
                 {key}
                 </button>  
                ))}
          </div>
        )
    }
}

export default KeyButton