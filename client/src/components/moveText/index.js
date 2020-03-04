import React from 'react'
import './moveText.css'
import Hero from "../../pages/character.json"

function text({ story, choiceBtn, heroIndex }) {
    console.log("this is my log", story);

    return (

        <div className="all">
            <div className="text">
                <p className="pText"> {story.text} </p>
            </div>
            <div >
                <img className="storySprite" src={Hero[heroIndex].url} />
            </div>
            <div className="storyButtons">
                <button onClick={() => { choiceBtn(story.options[0].storyId) }} className="button1">{story.options[0].text}</button>

                <button onClick={() => { choiceBtn(story.options[1].storyId) }} className="button2">{story.options[1].text}</button>
            </div>

        </div>
    )
}

export default text 