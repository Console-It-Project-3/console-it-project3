import React, { Component } from "react";
import Sprite from "../components/Character"
import Scroll from "../components/scroll"
import "./Character.css"

function handleButtonLeft() {
    console.log("clicked Left");

}

function handleButtonRight() {
    console.log("clicked Right");

}
function handleButtonChoose() {
    console.log("clicked Choose");

}


class Character extends Component {
    render() {
        return (
            <div className="charContain">
                <div className="row">
                    <div className="col-md-6">
                        <button onClick={handleButtonLeft} className="left"><i className="fas fa-chevron-left"></i></button>
                        <Sprite />
                        <button onClick={handleButtonRight} className="right"><i className="fas fa-chevron-right"></i></button>
                        <button onClick={handleButtonChoose} className="choose">Choose Character</button>

                    </div>
                    <div className="col-md-6">
                        <Scroll />
                    </div>
                </div>

            </div>
        )
    }
}

export default Character