import React from 'react'
import './moveText.css'

function text({ story, choiceBtn1, choiceBtn2 }) {
    return (

        <div className="all">
            <div className="text">
                <p className="pText"> {story.text} </p>
            </div>
            <div className="buttons">
                <button onClick={() => { choiceBtn1(story.options[0].storyId) }} className="button1">{story.options[0].text}</button>
                <button onClick={() => { choiceBtn1(story.options[1].storyId) }} className="button2">{story.options[1].text}</button>2
            </div>

        </div>
    )
}

export default text 