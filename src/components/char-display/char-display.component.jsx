import React from 'react'

import './char-display.styles.css'

const CharDisplay = ( props ) => {
    return (
        <div className="char-display">
            { props.displayChar }
        </div>
    )
}

export default CharDisplay