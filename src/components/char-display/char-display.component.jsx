import React from 'react'

import './char-display.styles.css'

const CharDisplay = ( props ) => {
    return (
        <div className="char-display" onClick={ props.charDisplayClicked }>
            { props.displayChar }
        </div>
    )
}

export default CharDisplay