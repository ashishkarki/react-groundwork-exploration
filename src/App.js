import React from 'react'
//import _ from 'lodash'

import './App.css'
import InputField from './components/input-field/input-field.component'
import InputValidation from './components/validation/validation.component'
import CharDisplay from './components/char-display/char-display.component'


class App extends React.Component {
  state = {
    inputString: '',
  }

  debouncedFn = () => console.log()

  inputChangedHandler = ( inputEvt ) => {
    //inputEvt.persist()
    console.log( `inputEvt: ${ inputEvt.target.value }` )

    // if ( !this.debouncedFn ) {
    //   this.debouncedFn = 
    //_.debounce( () => {
    this.setState( {
      inputString: inputEvt.target.value
    } )
    //}, 300 )
    // }

    // this.debouncedFn()

    console.log( `inputString: ${ this.state.inputString }` )
  }

  charDisplayClicked = ( charEvent, charIndex ) => {
    let inputArray = this.state.inputString.split( '' )
    inputArray.splice( charIndex, 1 )

    this.setState( {
      inputString: inputArray.join( '' )
    } )
  }

  displayInputCharacters = () => {
    const inputArray = this.state.inputString.split( '' )

    return inputArray.map( ( inputChar, index ) =>
      <CharDisplay
        key={ inputChar.concat( Math.random().toString() ) } displayChar={ inputChar }
        charDisplayClicked={ ( event ) => this.charDisplayClicked( event, index ) } /> )
  }

  render () {
    return (
      <div className="App">
        <InputField inputChanged={ this.inputChangedHandler } inputString={ this.state.inputString }>
          {
            this.state.inputString.length > 0 ?
              <div>
                The length of your input is: { this.state.inputString.length }
              </div>
              : null
          }
        </InputField>

        {
          this.state.inputString.length > 0 ?
            <InputValidation ipStringLength={ this.state.inputString.length } />
            : null }

        <div style={ { display: 'flex', flexDirection: 'row', flexWrap: ' wrap' } }>
          {
            this.displayInputCharacters()
          }
        </div>
      </div>
    )
  }
}

export default App
