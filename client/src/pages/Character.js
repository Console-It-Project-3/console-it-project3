import React, { Component } from "react";
import "./Character.css"
import characters from "./character.json"
import { withRouter } from 'react-router-dom';
import axios from 'axios'


class Character extends Component {

    state = {
        data: characters,
        curCharacter: {},
        curDescription: "This is a text",
        heroIndex: 1,
        coolDown: false

    }
    componentDidMount() {
        // var cur = this.state.data[0].description;
        // this.setState({ curCharacter: this.state.data[0] });
        // console.log(this.state.curCharacter)
    }

    handleButtonChoose = () => {
        console.log("clicked this is current hero Index!!!", this.state.heroIndex);
        this.props.setHeroIndex(this.state.heroIndex)
        // window.location.href = "story"
        console.log(this.state.data[this.state.heroIndex])
        axios.post('/api/character/', {
            character: this.state.data[this.state.heroIndex],
        })
            .then(response => {
                console.log("character added: ");
                console.log(response)
                console.log(response.status);
                if (response.status === 200) {
                    console.log('successful login')

                    this.props.history.push('/story');

                } else {
                    console.log('repeating data, check error')
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error)

            })

    }




    setCoolDown = () => {

        const self = this
        this.setState({ coolDown: true }, function () {
            setTimeout(function () {
                self.setState({ coolDown: false })
            }, 1000)
        })
    }

    handleNextHero = (direction) => {
        console.log('go to new hero', direction)
        this.setCoolDown()

        if (direction === 'next') {
            if (this.state.heroIndex === 4) {
                this.props.setHeroIndex(1)
                this.setState({ heroIndex: 1 })
            } else {
                this.props.setHeroIndex(this.state.heroIndex + 1)
                this.setState({ heroIndex: this.state.heroIndex + 1 })
            }
        }

        if (direction === 'previous') {
            if (this.state.heroIndex === 1) {
                this.props.setHeroIndex(4)
                this.setState({ heroIndex: 4 })
            } else {
                this.props.setHeroIndex(this.state.heroIndex - 1)
                this.setState({ heroIndex: this.state.heroIndex - 1 })
            }
        }
    }

    render() {
        console.log('this is our state', this.state)
        console.log('this is our props', this.props)
        return (
            <div className="charContain">

                <div id="carouselExampleControls" class="carousel slide" data-interval="false" >
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block h-100 sprite" value="1" src="https://i.imgur.com/huVIPkL.png" alt="Archer" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block h-100 sprite" value="2" src="https://i.imgur.com/fCofyAs.png" alt="Warrior" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block h-100 sprite" value="3" src="https://i.imgur.com/bKvuY6T.png" alt="Warrior" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block h-100 sprite" value="4" src="https://i.imgur.com/pIHmyE4.png" alt="Mage" />
                        </div>
                    </div>

                    {!this.state.coolDown ? (
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" onClick={() => { this.handleNextHero('previous') }}>
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only" >Previous</span>
                        </a>
                    ) : ''}


                    {!this.state.coolDown ? (
                        <a class="carousel-control-next" onClick={() => { this.handleNextHero('next') }} href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only" >Next</span>
                        </a>
                    ) : ''}

                </div>

                <button onClick={this.handleButtonChoose} className="choose">Choose Character</button>

            </div>


        )
    }
}

export default withRouter(Character) 