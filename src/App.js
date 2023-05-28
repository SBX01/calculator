
import { Component } from 'react'
import Calculator from './Calculator/calculator';
import './App.css';

class App extends Component {
  state = {
    keys : [7,8,9,'+',4,5,6,'-',1,2,3,'*',0,'.','=','/','C'], // botones
    valueDisplay: '', // valor a mostrar
    operand1: null, // Primer operando
    operator: null, // Operador actual
    waitingForOperand: false // Bandera para controlar si se espera un segundo operando

  }

  handleOperatorClick = (operator) => {
    const { valueDisplay } = this.state

    this.setState({
      operand1: parseFloat(valueDisplay),
      operator: operator,
      waitingForOperand: true
    })
  }
  handleEqualClick = () => {
    const { valueDisplay, operand1, operator } = this.state;

    if (!operator) return;

    const operand2 = parseFloat(valueDisplay);
    let result;

    switch (operator) {
      case '+':
        result = operand1 + operand2;
        break;
      case '-':
        result = operand1 - operand2;
        break;
      case '*':
        result = operand1 * operand2;
        break;
      case '/':
        result = operand1 / operand2;
        break;
      default:
        return;
    }

    this.setState({
      valueDisplay: String(result),
      operand1: null,
      operator: null,
      waitingForOperand: true
    })
  }

  handleClearClick = () => {
    this.setState({
      valueDisplay: '',
      operand1: null,
      operator: null,
      waitingForOperand: false
    });
  };

  handleDigitClick = (digit) => {
    const { waitingForOperand,valueDisplay } = this.state
    console.log(typeof digit);
    if (waitingForOperand) {
      this.setState({
        valueDisplay: String(digit),
        waitingForOperand: false
      })
    } else {
      this.setState({
        valueDisplay:
        valueDisplay === '' ? String(digit) : valueDisplay + digit
      })
    }        
  }

  render(){
    const { valueDisplay } = this.state;
    console.log(valueDisplay.length);
    return (
      <div className='App-back' >
        <Calculator
        valueDisplay={valueDisplay}
        keys={this.state.keys}
        handleDigitClick={this.handleDigitClick}
        handleOperatorClick={this.handleOperatorClick}
        handleEqualClick={this.handleEqualClick}
        handleClearClick={this.handleClearClick}
        >
        </Calculator>
      </div>
    );
  }

}

export default App;
