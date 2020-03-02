import React, { Component } from "react";
import Sprite from "../components/Character"
import Scroll from "../components/scroll"
import "./Character.css"
import characters from "./character.json"



function handleButtonChoose() {
    console.log("clicked Choose");

}



class Character extends Component {

    state = {
        data: characters,
        curCharacter: {},
        curDescription: "This is a text"

    }
    componentDidMount() {
        // var cur = this.state.data[0].description;
        // this.setState({ curCharacter: this.state.data[0] });
        // console.log(this.state.curCharacter)
    }

    characterSelect = (e) => {
        // e.preventDefault()
        // for (let i = 0; i < characters.length; i++) {
        //     this.setState({
        //         curCharacter: characters[i].url,
        //         curDescription: characters[i].description
        //     })

        // }



        // var cur = document.getElementsByClassName("active")
        // console.log("activ1", cur)
        // var newClass = cur[0].children[0].alt
        // console.log("activ2", newClass);
        // var arr = this.state.data;
        // console.log(arr);
        // for (let i = 0; i < arr.length; i++) {
        //     console.log(arr[i], arr[i + 2]);
        //     if (newClass == arr[i].class) {
        //         this.setState({ curCharacter: arr[i] });
        //         console.log(this.state.curCharacter)
        //     }
        // }
    }

    render() {
        return (
            <div className="charContain">
                <div className="row">
                    <div className="col-md-6">

                        <div id="carouselExampleControls" class="sprite carousel slide" data-ride="carousel" data-interval="false" >
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img class="d-block h-100" src="https://i.imgur.com/huVIPkL.png" alt="Warrior" />
                                    <div className="testText"> 1This is test 1</div>
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block h-100" src={this.state.curCharacter} alt="Archer" />
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block h-100" src="https://i.imgur.com/bKvuY6T.png" alt="Warrior" />
                                    <div className="testText"> 2This is test 2</div>
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block h-100" src="https://i.imgur.com/pIHmyE4.png" alt="Mage" />
                                    <div className="testText"> 3This is test 3</div>
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" onClick={this.characterSelect} href="#carouselExampleControls" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>

                        <button onClick={handleButtonChoose} className="choose">Choose Character</button>

                    </div>
                    <div className="col-md-6">
                        <Scroll style={{ zIndex: '-1' }}
                            text={this.state.curDescription}
                        />
                    </div>
                </div>

            </div>
        )
    }
}

export default Character