/***********************************************************************************
 *  Purpose         : Taking input and creating front end page using react and sends 
 *                    the input in services.
 *  @file           : dashboardinput.jsx
 *  @author         : Jyotsana Khaparde
 *  @version        : 1.0
 *  @since          : 28/01/2019
 **********************************************************************************/
import React, { Component } from "react";
import { toast } from "react-toastify";
import { userForgetPassword } from "../services/userServices";
class ForgetPasswordInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            toast: false,
        }
    }
    handleuseremailChange = (event) => {
        const email = event.target.value
        this.setState({ email: email })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.email === "") {
            toast("email can not be empty", { position: toast.POSITION.BOTTOM_CENTER });
        }
        else
            if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.email)) {
                toast("Invalid email", { position: toast.POSITION.BOTTOM_CENTER });
            }
            else {
                event.preventDefault()
                // const verify_token = localStorage.getItem('forgetPassToken');
                userForgetPassword(this.state.email);
            }
    }
    render() {
        return (
            <div>
                <center>
                    <form>
                        <div className="App_form">
                            <div className="insideDiv">
                                <label>Enter Email</label>
                                <input type="text" placeholder="Enter valid email" name="email" value={this.state.email} onChange={this.handleuseremailChange} />
                                <button type="submit" className="button" onClick={this.handleSubmit}>Sent Link</button>
                            </div>
                        </div>
                    </form>
                </center>
            </div>
        )
    }
}
export default ForgetPasswordInput;