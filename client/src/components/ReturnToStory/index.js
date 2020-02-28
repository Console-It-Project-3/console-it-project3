import React from 'react'
import "./returnToStory.css"


function ReturnToStory({ endShow, handleReturnStory }) {

    const returnStory = endShow ? "returnStory" : "returnStory hide"

    return (
        <div>
            <button onClick={handleReturnStory} className={returnStory}>Continue</button>
        </div >
    )
}

export default ReturnToStory
