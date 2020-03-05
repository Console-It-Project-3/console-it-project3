import React, { Component } from "react";
import "../pages/Home.css"
import API from "../utils/api";
import axios from "axios";
// import { response } from "express";
import { withRouter } from 'react-router'
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
            userData: [],
            username: '',
            password: '',
            user: '',
            redirectTo: null
        }
        this.getUser = this.getUser.bind(this)
        this.updateUser = this.updateUser.bind(this)
        this.componentDidMount = this.getUser.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
        //     console.log("users", data)
        //     this.setState({ userData: data.data })
        // })
        API.getUser().then(data => {
            console.log("hit api zero", data);
            this.setState({ email: data.data })
        })
        API.getAllCharacters().then(data => {
            console.log("hit api one", data.data);
            this.setState({ characterData: data.data })
        })
        API.getAllEnemies({}).then(data => {
            console.log("hit api two", data.data);
            this.setState({ enemiesData: data.data })
        })
        API.getAllEquipment({}).then(data => {
            console.log("hit api three", data.data);
            this.setState({ equipmentData: data.data })
        })
        API.getAllFood({}).then(data => {
            console.log("hit api four", data.data);
            this.setState({ foodData: data.data })
        })
        API.getAllPotion({}).then(data => {
            console.log("hit api five", data.data);
            this.setState({ potionData: data.data })
        })
        API.getAllRandom({}).then(data => {
            console.log("hit api six", data.data);
            this.setState({ RandomData: data.data })
        })
        API.getAllStory({}).then(data => {
            console.log("hit api seven", data.data);
            this.setState({ storyData: data.data })
        })
    }

    updateUser(userObject) {
        this.setState(userObject)
    }

    getUser() {
        axios.get('api/user/').then(response => {
            console.log('get user response: ');
            console.log(response.data);
            if (response.data.user) {
                console.log("hello " + response.data.user);
                console.log('there is a user saved in the database');
                this.setState({
                    loggedIn: true,
                    username: response.data.user.username,
                    user: response.data.user
                })
            } else {
                console.log('get user: no user');
                this.setState({
                    loggedIn: false,
                    username: null
                })
            }
        })
    }

    handleChange(event) {
        console.log("typing");
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event) {
        console.log('sign-up handleSubmit, username: ')
        console.log(this.state.username)

        event.preventDefault()

        //request to server to add a new username/password
        axios.post('/api/user/login', {
            username: this.state.username,
            password: this.state.password,
        })
            .then(response => {
                console.log("login response: ");
                console.log(response)
                console.log(response.status);
                if (response.status === 200) {
                    console.log('successful login')
                    this.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                    console.log(this.state);

                    this.props.history.push('/character');

                } else {
                    console.log('repeating data, check error')
                }
            }).catch(error => {
                console.log('login error: ')
                this.props.history.push('/character');
                console.log(error)

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
                                                        id="usernameInput"
                                                        name="username"
                                                        value={this.state.username}
                                                        onChange={this.handleChange} placeholder="username" className="form-control form-control-sm"
                                                        type="text"
                                                        required="" />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        id="passwordInput" name="password"
                                                        value={this.state.password}
                                                        onChange={this.handleChange} placeholder="Password" className="form-control form-control-sm"
                                                        type="password"
                                                        required="" />
                                                </div>
                                                <div className="form-group">
                                                    <button type="submit" onClick={this.handleSubmit} className="btn btn-primary btn-block">Login</button>
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

export default withRouter(Home);