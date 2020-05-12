import React from 'react'

const CharComponent = (props) => {
    const style = {
        display: 'inline-block', 
        padding: '16px', 
        textAlign: 'center', 
        margin: '16px', 
        border: '1px solid black'
    }

    return (
        <p onClick={props.characterClicked} style={style}>{props.character}</p>
    )
}

export default CharComponent;