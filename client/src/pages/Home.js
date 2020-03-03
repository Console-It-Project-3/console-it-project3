import React, { Component } from "react";
import "../pages/Home.css"
import API from "../utils/api";
import axios from "axios";
// add login feature


class Home extends Component {
    constructor() {
        super()
        this.state = {
            characterData: [],
            enemiesData: [],
            equipmentData: [],
            foodData: [],
            potionData: [],
            RandomData: [],
            storyData: [],
            email: '',
            password: ''
        }
        this.tryLogin = this.tryLogin.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    // need to mount everything we are going to need to play the game,
    // need to mount all the characters for the spesific user
    // need to mount all of the equipment
    // need to mount all of the enemies
    // need to mount all of the food
    // need to mount all of the story
    // need to mount the random events
    componentDidMount() {
        // API.getUser().then(data => {
        //     console.log("hit api zero", data);
        //     this.setState({ email: data.data })
        // })
        API.getCharacters().then(data => {
            // console.log("hit api one", data.data);
            this.setState({ characterData: data.data })
        })
        API.getEnemies({}).then(data => {
            // console.log("hit api two", data.data);
            this.setState({ enemiesData: data.data })
        })
        API.getEquipment({}).then(data => {
            // console.log("hit api three", data.data);
            this.setState({ equipmentData: data.data })
        })
        API.getFood({}).then(data => {
            // console.log("hit api four", data.data);
            this.setState({ foodData: data.data })
        })
        API.getPotion({}).then(data => {
            // console.log("hit api five", data.data);
            this.setState({ potionData: data.data })
        })
        API.getRandom({}).then(data => {
            // console.log("hit api six", data.data);
            this.setState({ RandomData: data.data })
        })
        API.getStory({}).then(data => {
            // console.log("hit api seven", data.data);
            this.setState({ storyData: data.data })
        })
    }

    handleChange(event) {
        console.log("typing");
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    tryLogin(event){
        event.preventDefault();
        console.log("clicking");
        var obj = {
            email: this.state.email,
            password: this.state.password
        }
        console.log(obj)
        axios
            .post('/api/user/login', obj)
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
                        redirectTo: '/character'
                    })
                }else {
                    console.log('error')
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
                        <div className="collapse navbar-collapse" id="exCollapsingNavbar">
                            <ul className="nav navbar-nav">
                                <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
                            </ul>

                            <ul className="nav navbar-nav flex-row justify-content-between ml-auto">
                            {/* <li className="nav-item order-2 order-md-1"><a href="/signup" clclassNameass="nav-link" title="settings"><i className="fa fa-cog fa-fw fa-lg"></i></a></li> */}
                                <li className="dropdown order-1">
                                    <button type="button" id="sign-up-btn" className="btn btn-outline-secondary" ><a href="/signup" className="nav-link">Sign Up</a><span className="caret"></span></button>

                                </li>
                                <li className="dropdown order-1">
                                    <button type="button" id="dropdownMenu1" data-toggle="dropdown" className="btn btn-outline-secondary dropdown-toggle">Login <span className="caret"></span></button>
                                    <ul className="dropdown-menu dropdown-menu-right mt-2">
                                        <li className="px-3 py-2">
                                            <form className="form" role="form">
                                                <div className="form-group">
                                                    <input 
                                                    id="emailInput" 
                                                    name="email" 
                                                    value={this.state.email}
                                                    onChange={this.handleChange} placeholder="Email" className="form-control form-control-sm" 
                                                    type="text" 
                                                    required="" />
                                                </div>
                                                <div className="form-group">
                                                    <input 
                                                    id="passwordInput" name="password" 
                                                    value={this.state.password}
                                                    onChange={this.handleChange}placeholder="Password" className="form-control form-control-sm" 
                                                    type="text" 
                                                    required="" />
                                                </div>
                                                <div className="form-group">
                                                    <button type="submit" onClick={this.tryLogin}className="btn btn-primary btn-block">Login</button>
                                                </div>
                                                <div className="form-group text-center">
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