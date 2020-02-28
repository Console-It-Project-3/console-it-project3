import React from 'react'
import "./BattleStats.css"

function BattleStats({ heroHP, enemyHP, heroMaxHP, enemyMaxHP }) {
    return (
        <>
            <div className="heroBox">
                <p>EnemyName</p>
                <progress className="heroBar" id="file" value={heroHP} max={heroMaxHP}></progress>
            </div>
            <div className="heroImg">
            </div>
            <div className="enemyBox">
                <p>HeroName</p>
                <progress className="enemyBar" id="file" value={enemyHP} max={enemyMaxHP} ></progress>
            </div>
            <div className="enemyImg">
            </div>
        </>
    )
}

export default BattleStats
