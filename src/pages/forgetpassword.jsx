/***********************************************************************************
 *  Purpose         : To render atlist onece and give the path of components.
 *  @file           : login.jsx
 *  @author         : Jyotsana Khaparde
 *  @version        : 1.0
 *  @since          : 28/01/2019
 **********************************************************************************/
import React, { Component } from "react";
import ForgetPasswordInput from "../components/fogetpasswordinput";
class ForgetPassword extends Component {
    render() {
        return (
            <div>
                <div className="App_aside"></div>
                <div className="App_form"></div>
                <div>
                    <h1><center>Forget Password</center></h1>
                </div>
                <div>
                    <ForgetPasswordInput/>
                </div>
            </div>
        )
    }
}
export default ForgetPassword; 