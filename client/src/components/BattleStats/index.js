import React from 'react'
import "./BattleStats.css"

function BattleStats({ heroHP, heroMaxHP, enemy }) {
    console.log('this is enemey in battle stats!!', enemy)
    return (
        <>
            <div className="heroBox">
                <p>HeroName</p>
                <progress className="heroBar" id="file" value={heroHP} max={heroMaxHP}></progress>
            </div>
            <img src="https://i.imgur.com/7rWOaEN.png" className="heroImg" />
            <div className="enemyBox">
                <p>{enemy.enemyName}</p>
                <progress className="enemyBar" id="file" value={enemy.enemyHP} max={enemy.enemyMaxHP} ></progress>
            </div>

            <img src={enemy.enemySrc} className="enemyImg" />

        </>
    )
}

export default BattleStats
