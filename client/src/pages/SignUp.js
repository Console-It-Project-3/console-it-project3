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
                    this.props.history.push('/home');
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
    render() {
        return (

            <div className="signup-box">
                <div className="container-signup">
                    <form className="needs-validation" noValidate>
                        <div className="form-row">
                            <div className="col-md-4 mb-3">
                                <label for="validationCustom01">First name: </label>
                                <input type="text"
                                    id="firstname"
                                    name="firstname"
                                    value={this.state.firstname}
                                    onChange={this.handleChange}
                                    className="form-control" placeholder="Enter your first name" required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="validationCustom02">Last name: </label>
                                <input type="text"
                                    id="lastname"
                                    name="lastname"
                                    value={this.state.lastname}
                                    onChange={this.handleChange}
                                    className="form-control" placeholder="Enter your last name" required />

                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="validationCustomUsername">Username: </label>
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
                            <label for="inputEmail3" className="col-sm-2 col-form-label">Email: </label>
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
                            <label for="inputPassword3" className="col-sm-2 col-form-label">Password: </label>
                            <div className="col-sm-10">
                                <input type="password"
                                    id="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    className="form-control" id="inputPassword3" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" required />
                                <label className="form-check-label" for="invalidCheck">
                                    Agree to terms and conditions
                                </label>
                                <div className="invalid-feedback">
                                    You must agree before submitting.
                                 </div>
                            </div>
                        </div>
                        <button className="btn btn-primary" onClick={this.handleSubmit} type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default withRouter(Signup)