import React from 'react'
import './battleText.css'

function battleText({ handleButtonFight, handleButtonInventory, handleButton3, handleButtonRun, battleDialogue, faded }) {



    const textClass = faded ? 'fading battleDialogue' : ' battleDialogue'

    return (

        <div className="battleText">
            <div className="text">
                <p className={textClass}>    {battleDialogue} </p>
            </div>
            <div className="buttons">
                <button onClick={handleButtonFight} className="button1">Fight</button>
                <button onClick={handleButtonInventory} className="button2">Inventory</button>
                <button onClick={handleButton3} className="button3">Button3</button>
                <button onClick={handleButtonRun} className="button4">Run</button>
            </div>

        </div>
    )
}

export default battleText