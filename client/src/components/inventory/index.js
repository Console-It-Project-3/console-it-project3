import React from 'react'
import "./inventory.css"



function inventory({ inventory, invenShow, handleButtonInventory }) {

    const invenClass = invenShow ? 'invenBox' : 'hide invenBox'



    return (
        <div className={invenClass}>
            <p className="invenHead">Inventory</p>
            <ul className="items">
                {inventory.map(item => (<li><button className="itemBtn">use</button> {item} </li>))}
            </ul>
            <button onClick={handleButtonInventory} className="closeBtn">Close</button>
        </div>
    )
}

export default inventory
