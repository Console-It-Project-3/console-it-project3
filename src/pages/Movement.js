import React, { Component } from "react";
import Moving from "../components/movement"
import MoveText from "../components/moveText"



function handleButtonOne() {
    console.log("clicked");

}
function handleButtonTwo() {
    console.log("clicked");

}
function handleButtonThree() {
    console.log("clicked");

}
function handleButtonFour() {
    console.log("clicked");

}



class Movement extends Component {

    state ={
        storyDialogue: "You awaken from you mid-morning nap at the sound of nearby screaming. 'Monsters!' the screams shout. 'Monsters are attacking the capital!' "
    }

    

    render() {
        return (
            <>
                <Moving />
                <MoveText />
            </>
        )
    }
}

export default Movement