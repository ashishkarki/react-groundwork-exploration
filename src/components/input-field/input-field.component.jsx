import React from "react"

const InputField = ( props ) => {
    return (
        <div>
            <input onChange={ props.inputChanged } value={ props.inputString } />

            <div style={ { margin: '5px auto' } }>
                { props.children }
            </div>
        </div>
    )
}

export default InputField