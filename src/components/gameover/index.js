import React from 'react'
import "./gameover.css"

function gameOver() {
    return (
        <div className="highcontain">
            <div className="scoreContain">
                <h3 className="scoreTitle">You Have Died!</h3>
                {/* <div className="row">
                    <div className="col-md-6 scoreName">
                        <p>Andre</p>
                    </div>
                    <div className="col-md-6 scoreScore">
                        <p>10,000</p>
                    </div>
                </div> */}
                <a className="btn btn-secondary btn-lg btn-block homeBtn" href="/home" role="button">Home</a>
            </div>
        </div>

    )
}

export default gameOver
