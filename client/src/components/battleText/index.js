import React from 'react'
import './battleText.css'

function battleText({ handleButtonFight, handleButtonInventory, handleButton3, handleButtonRun, battleDialogue, faded }) {



    const textClass = faded ? 'fading battleDialogue' : ' battleDialogue'

    return (

        <div className="battleText">
            <div className="text">
                <p className={textClass}>    {battleDialogue} </p>
            </div>
            <div className="battleButtons">
                <button onClick={handleButtonFight} className="battleButton1">Fight</button>
                <button onClick={handleButtonInventory} className="battleButton2">Inventory</button>
                <button onClick={handleButton3} className="battleButton3">Button3</button>
                <button onClick={handleButtonRun} className="battleButton4">Run</button>
            </div>

        </div>
    )
}

export default battleText