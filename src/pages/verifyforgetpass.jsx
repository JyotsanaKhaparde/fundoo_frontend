/***********************************************************************************
 *  Purpose         : To render atlist onece and give the path of components.
 *  @file           : login.jsx
 *  @author         : Jyotsana Khaparde
 *  @version        : 1.0
 *  @since          : 28/01/2019
 **********************************************************************************/
import React, { Component } from "react";
import VerifyForgetPassInput from "../components/verifyForgetPassInput";
class VerifyForgetPass extends Component {
    render() {
        return (
            <div>
                <h1><center>forget password is in progress</center></h1>
                <div>
                    <VerifyForgetPassInput />
                </div>
            </div>
        )
    }
}
export default VerifyForgetPass; 