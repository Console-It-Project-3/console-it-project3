import React from 'react'
import "./BattleStats.css"
import Hero from "../../pages/character.json"

function BattleStats({ heroHP, heroMaxHP, enemy, heroIndex }) {
    console.log('this is enemey in battle stats!!', enemy)
    return (
        <>
            <div className="heroBox">
                <p>HeroName</p>
                <progress className="heroBar" id="file" value={heroHP} max={heroMaxHP}></progress>
            </div>
            <img src={Hero[heroIndex].url} className="heroImg" />
            <div className="enemyBox">
                <p>{enemy.enemyName}</p>
                <progress className="enemyBar" id="file" value={enemy.enemyHP} max={enemy.enemyMaxHP} ></progress>
            </div>

            <img src={enemy.enemySrc} className="enemyImg" />

        </>
    )
}

export default BattleStats
