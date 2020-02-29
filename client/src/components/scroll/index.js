import React from 'react'
import "./scroll.css"

function scroll(props) {
    return (

        <div className="scroll">
            <p className="scrollText"> {props.text}</p>
        </div>

    )
}

export default scroll
