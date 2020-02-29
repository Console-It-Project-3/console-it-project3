import React, { Component } from 'react'
import "./Market.css"
import inventory from '../components/inventory'
class Market extends Component {
    state = {
        text: "What would you like to do?",
        buy: [{ item: "Potion +20hp ($20)" }, { item: "Sword +5Att ($100)" }, { item: "Shield +7Def ($110)" }],
        inventory: [{ item: "Potion +20hp ($20)" }, { item: "Sword +5Att ($100)" }, { item: "Shield +7Def ($110)" }],
    }

    btn1 = () => {
        this.setState({
            text: (this.state.buy.map(item => <li className="shopLi"><button className="buyBtn">Buy</button>{item.item}</li>))
        })
    }
    btn2 = () => {
        this.setState({
            text: (this.state.inventory.map(item => <li className="shopLi"><button className="sellBtn">Sell</button>{item.item}</li>))
        })
    }

    btn3 = () => {

    }

    btn4 = () => {
        window.location.href = "movement"
    }



    render() {
        return (
            <div className="marketBackground">
                <div className="merchant">

                </div>
                <div className="marketScroll">
                    <p className="marketText"> {this.state.text}</p>
                    <div className="marketButtons">
                        <button onClick={this.btn1} className="mBtn1">Buy</button>
                        <button onClick={this.btn2} className="mBtn2">Sell</button>
                        <button onClick={this.btn3} className="mBtn3">Btn3</button>
                        <button onClick={this.btn4} className="mBtn4">Go Back</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Market
