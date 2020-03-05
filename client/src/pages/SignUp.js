import React, { Component } from "react";
import "./SignUp.css"
import axios from 'axios'
import { withRouter } from 'react-router'


class Signup extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            email: '',
            confirmPassword: '',
            redirectTo: null

        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event) {
        console.log('sign-up handleSubmit, username: ')
        console.log(this.state.username)
        // if(this.state.value.length <8){
        //     alert("password is too short")
        // }
        // if(this.state.username = null){
        //     alert("username is needed")
        // }
        // if(this.state.firstname = null){
        //     alert("First name needed")
        // }
        // if(this.state.lastname = null){
        //     alert("Last name needed")
        // }
        // if(this.state.email = null){
        //     alert("email is needed")
        // }
        // // if(this.state.password = null){
        // //     alert("password is needed")
        // // }
        if (this.state.username != '' && this.state.password != '' && this.state.firstname != '' && this.state.lastname != '' && this.state.email != '') {
            const { password, confirmPassword } = this.state;
            if (password !== confirmPassword) {
                alert("passwords don't match");
                window.location.reload(false);
            } else {
            }
            event.preventDefault()

            //request to server to add a new username/password
            axios.post('/api/user/', {
                username: this.state.username,
                password: this.state.password,
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email
            })
                .then(response => {
                    console.log(response)
                    if (!response.data.errmsg) {
                        console.log('successful signup')
                        this.props.history.push('/character');
                        // this.setState({ //redirect to login page
                        // 	redirectTo: ' /login'
                        // })
                    } else {
                        console.log('repeating data, check error')
                    }
                }).catch(error => {
                    console.log('signup error: ')
                    console.log(error)

                })
        }
    }

    // handleLoginSubmit(event) {
    //     console.log('sign-up handleSubmit, username: ')
    //     console.log(this.state.username)
    //     this.props.history.push('/character');
    //     event.preventDefault()

    //     //request to server to add a new username/password
    //     // axios.post('/api/user/login', {
    //     //     username: this.state.username,
    //     //     password: this.state.password,
    //     // })
    //     //     .then(response => {
    //     //         console.log("login response: ");
    //     //         console.log(response)
    //     //         console.log(response.status);
    //     //         if (response.status === 200) {
    //     //             console.log('successful login')
    //     //             this.updateUser({
    //     //                 loggedIn: true,
    //     //                 username: response.data.username
    //     //             })
    //     //             console.log(this.state);

    //     //             this.props.history.push('/character');

    //     //         } else {
    //     //             console.log('repeating data, check error')
    //     //         }
    //     //     }).catch(error => {
    //     //         console.log('login error: ')
    //     //         this.props.history.push('/character');
    //     //         console.log(error)

    //     //     })
    // }

    render() {
        return (

            <div className="signup-box">
                <div className="container-signup">
                    <form className="needs-validation" >
                        <div className="form-row">
                            <div className="col-md-4 mb-3">
                                <label htmlFor="validationCustom01">First name: </label>
                                <input type="text"
                                    id="firstname"
                                    name="firstname"
                                    value={this.state.firstname}
                                    onChange={this.handleChange}
                                    className="form-control" placeholder="Enter first name" required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="validationCustom02">Last name: </label>
                                <input type="text"
                                    id="lastname"
                                    name="lastname"
                                    value={this.state.lastname}
                                    onChange={this.handleChange}
                                    className="form-control" placeholder="Enter last name" required />

                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="validationCustomUsername">Username: </label>
                                <div className="input-group">
                                    <input type="text" className="form-control"
                                        id="username"
                                        name="username"
                                        value={this.state.username}
                                        onChange={this.handleChange}
                                        aria-describedby="inputGroupPrepend" required />
                                    <div className="invalid-feedback">
                                        Please choose a username.
                                     </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email: </label>
                            <div className="col-sm-10">
                                <input type="email"
                                    id="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    className="form-control" id="inputEmail3" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password: </label>
                            <div className="col-sm-10">
                                <input type="password"
                                    id="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    className="form-control" id="inputPassword3" required />
                                <div className="invalid-feedback">
                                    Passwords do not match.
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputPassword4" className="col-sm-2 col-form-label">Confirm Password: </label>
                            <div className="col-sm-10">
                                <input type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={this.state.confirmPassword}
                                    onChange={this.handleChange}
                                    className="form-control" id="inputPassword3" required />
                                <div className="invalid-feedback">
                                    Passwords do not match.
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" required />
                                <label className="form-check-label" htmlFor="invalidCheck">
                                    Agree to terms and conditions
                                </label>
                                <div className="invalid-feedback">
                                    You must agree before submitting.
                                 </div>
                            </div>
                        </div>
                        <button className="btn btn-primary" onClick={this.handleSubmit} type="submit">Sign Up</button>
                        <button type="button" id="dropdownMenu1" data-toggle="dropdown" className="btn btn-outline-secondary dropdown-toggle">Log In<span className="caret"></span></button>
                        <ul className="dropdown-menu dropdown-menu-right mt-2">
                            <li className="px-3 py-2">
                                <div className="form" role="form">
                                    <div className="form-group">
                                        <input id="emailInput" placeholder="Email" className="form-control form-control-sm" type="text" required="" />
                                    </div>
                                    <div className="form-group">
                                        <input id="passwordInput" placeholder="Password" className="form-control form-control-sm" type="password" required="" />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" onClick={this.handleLoginSubmit}className="btn btn-dark btn-block">Login</button>
                                    </div>
                                    <div className="form-group text-center">
                                        <small><a href="#" data-toggle="modal" data-target="#modalPassword">Forgot password?</a></small>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>

        )
    }
}
export default withRouter(Signup)