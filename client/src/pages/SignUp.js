import React, { Component } from "react";
import "./SignUp.css"


class Signup extends Component {
    render() {
        return (

            <div className="signup-box">
                <div className="container-signup">
                    <form className="needs-validation" noValidate>
                        <div className="form-row">
                            <div className="col-md-4 mb-3">
                                 <label for="validationCustom01">First name: </label>
                                <input type="text" className="form-control" placeholder="Enter your first name" required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="validationCustom02">Last name: </label>
                                <input type="text" className="form-control" placeholder="Enter your last name" required />

                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="validationCustomUsername">Username: </label>
                                <div className="input-group">
                                    <input type="text" className="form-control" aria-describedby="inputGroupPrepend" required />
                                    <div className="invalid-feedback">
                                        Please choose a username.
                                     </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="inputEmail3" className="col-sm-2 col-form-label">Email: </label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="inputEmail3" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="inputPassword3" className="col-sm-2 col-form-label">Password: </label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword3" />
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
                        <button className="btn btn-primary" type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Signup;