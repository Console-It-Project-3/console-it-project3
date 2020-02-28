import React from 'react'
import './Run.css'

function Run({ runShow, runDia, handleRunContinue }) {

    const runClass = runShow ? "runDialogue" : "runDialoge hide"


    return (
        <div className={runClass}>
            <p className="runText">{runDia}</p>
            <button onClick={handleRunContinue} className="runBtn">Continue</button>
        </div>
    )
}

export default Run
