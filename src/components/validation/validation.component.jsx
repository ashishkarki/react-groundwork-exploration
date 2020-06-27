import React from 'react'

const InputValidation = ( props ) => {
    let validationMsg = ''

    if ( props.ipStringLength < 5 ) {
        validationMsg = 'Text too short'
    } else {
        validationMsg = 'Text long enough'
    }

    return (
        <div style={ { border: '2px solid darkred', padding: '5px', margin: '5px auto', color: 'darkred', width: '25vw', } }>
            { validationMsg }
        </div>
    )
}

export default InputValidation