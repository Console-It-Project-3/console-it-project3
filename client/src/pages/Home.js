import React, { Component } from "react";
import "../pages/Home.css"
import API from "../utils/api";
import Axios from "axios";
// add login feature


class Home extends Component {

    state = {
        characterData: [],
        enemiesData: [],
        equipmentData: [],
        foodData: [],
        potionData: [],
        RandomData: [],
        storyData: [],
        userEmail: '',
        userPassword: ''
    }

    // need to mount everything we are going to need to play the game,
    // need to mount all the characters for the spesific user
    // need to mount all of the equipment
    // need to mount all of the enemies
    // need to mount all of the food
    // need to mount all of the story
    // need to mount the random events
    componentDidMount() {
        API.getCharacters().then(data => {
            console.log("hit api one", data.data);
            this.setState({ characterData: data.data })
        })
        API.getEnemies({}).then(data => {
            console.log("hit api two", data.data);
            this.setState({ enemiesData: data.data })
        })
        API.getEquipment({}).then(data => {
            console.log("hit api three", data.data);
            this.setState({ equipmentData: data.data })
        })
        API.getFood({}).then(data => {
            console.log("hit api four", data.data);
            this.setState({ foodData: data.data })
        })
        API.getPotion({}).then(data => {
            console.log("hit api five", data.data);
            this.setState({ potionData: data.data })
        })
        API.getRandom({}).then(data => {
            console.log("hit api six", data.data);
            this.setState({ RandomData: data.data })
        })
        API.getStory({}).then(data => {
            console.log("hit api seven", data.data);
            this.setState({ storyData: data.data })
        })
    }

    handleChange = (event) => {
        console.log("typing");
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    tryLogin = (e) => {
        e.preventDefault();
        console.log("clicking");
        var obj = {
            email: this.state.userEmail,
            password: this.state.userPassword
        }
        console.log(obj)
        Axios
            .post('/api/user/login', {
                email: this.state.userEmail,
                password: this.state.userPassword
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                console.log(response.status);
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);
            })
    }


    render() {
        return (
            <div className="landingImg">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" role="navigation">
                    <div class="container">
                        <a class="navbar-brand" href="/home">KnightFall</a>
                        <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar">
                            &#9776;
                        </button>
                        <div class="collapse navbar-collapse" id="exCollapsingNavbar">
                            <ul class="nav navbar-nav">
                                <li class="nav-item"><a href="/" class="nav-link">Home</a></li>
                            </ul>
                            <ul class="nav navbar-nav flex-row justify-content-between ml-auto">
                                {/* <li class="nav-item order-2 order-md-1"><a href="/signup" class="nav-link" title="settings"><i class="fa fa-cog fa-fw fa-lg"></i></a></li> */}
                                <li class="dropdown order-1">
                                    <button type="button" id="sign-up-btn" class="btn btn-outline-secondary" ><a href="/signup" class="nav-link">Sign Up</a><span class="caret"></span></button>
                                </li>
                                <li class="dropdown order-1">
                                    <button type="button" id="dropdownMenu1" data-toggle="dropdown" class="btn btn-outline-secondary dropdown-toggle">Login <span class="caret"></span></button>
                                    <ul class="dropdown-menu dropdown-menu-right mt-2">
                                        <li class="px-3 py-2">
                                            <form class="form" role="form">
                                                <div class="form-group">
                                                    <input id="emailInput" placeholder="Email" class="form-control form-control-sm" type="text" required="" />
                                                </div>
                                                <div class="form-group">
                                                    <input id="passwordInput" placeholder="Password" class="form-control form-control-sm" type="text" required="" />
                                                </div>
                                                <div class="form-group">
                                                    <button type="submit" class="btn btn-primary btn-block">Login</button>
                                                </div>
                                                <div class="form-group text-center">
                                                    <small><a href="#" data-toggle="modal" data-target="#modalPassword">Forgot password?</a></small>
                                                </div>
                                            </form>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="jumbotron">
                    <div className="jumboContain">
                        <h1 className="display-4">KnightFall</h1>
                        <p className="lead">In a world where evil is left to thrive, a hero is needed to bring balance to the force! </p>
                        <hr className="my-4"></hr>
                        <p className="call2Action">Will you be that hero?</p>
                        <a className="playBtn btn btn-primary btn-lg btn-block" href="/signup" role="button">Play Now</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;