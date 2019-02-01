/***********************************************************************************
 *  Purpose         : 
 *  @file           : usreService.js
 *  @author         : Jyotsana Khaparde
 *  @version        : 1.0
 *  @since          : 16/01/2019
 **********************************************************************************/
import axios from 'axios';
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
function userRegister(firstname, lastname, email, password) {
    axios.post('/registration',
        {
            firstName: firstname,
            lastName: lastname,
            email: email,
            password: password,
            toast: false
        })
        .then(function (response) {
            toast("Registered Successfully.....", { position: toast.POSITION.BOTTOM_CENTER });
            console.log("response after register", response.data);
            const token1 = response.data;
            const token2 = token1.substring(34)
            console.log("25---userService.js FE---Token2 :", token2); //getting token
            localStorage.setItem('verifyToken', token2);
            alert('Please Check your email for verification')
            //  window.location.href = `/registraion`
            //window.location.href = '/login'
            // window.location.href = '/verifyEmail/:token'
        })
        .catch(function (err) {
            console.log(err);
            toast("User with this Username already exists", { position: toast.POSITION.BOTTOM_CENTER });
        });
}
function userLogin(username, password) {
    //send the data to server
    axios.post('/login',
        {
            email: username,
            password: password,
            toast: false,
        })
        .then(function (response) {
            localStorage.setItem('sender', username);
            localStorage.setItem('password', password);
            localStorage.setItem('token', response.data.token)
            toast("Login Successfully.....", { position: toast.POSITION.BOTTOM_CENTER });
            //console.log(response);
            window.location.href = '/dashboard'
        })
        .catch(function (err) {
            toast("Login Unsuccessful.....", { position: toast.POSITION.BOTTOM_CENTER });
            console.log(err);
        });
}
function userForgetPassword(email) {
    axios.post('/forgetpassword',
        {
            email: email
        })
        .then(function (response) {
            console.log("64---userServices.js--FE--responsedata", response.data);
            const ForgetPassToken1 = response.data;
            const ForgetPassToken2 = ForgetPassToken1.substring(34)
            console.log("25---userService.js FE---Token2 :", ForgetPassToken2); //getting token
            localStorage.setItem('forgetPassToken', ForgetPassToken2);
            alert('Please Check your email for verification')
            console.log(response);
            // window.location.href = '/login'
        })
        .catch(function (err) {
            console.log(err);
        });
}
function userverifyEmail(token) {
    console.log('63--inside user service.js--- FE :', token); // getting token

    axios.post(`/verifyEmail/${token}`, "", {
        headers: {
            'token': token
        }
    })
        .then(function (response) {
            console.log("81---userService.js--FE----response: ", response);

            alert('User verified successfully');
            window.location.href = '/login'
        })
        .catch(function (err) {

            console.log(err);
            alert('User is not verified.. Please verify email!!');
        });
}

function userverifyForgetPassword(token) {
    console.log('98--inside user service.js--- FE :', token); // getting token
    axios.post(`/verifyForgetPass/${token}`, "", {
        headers: {
            'token': token
        }
    })
        .then(function (response) {
            console.log("105---userService.js--FE----response: ", response);
            alert('User verified successfully');
            window.location.href = '/resetPassword'
        })
        .catch(function (err) {

            console.log(err);
            alert('User is not verified.. Please verify email!!');
        });
}
export {
    userRegister,
    userLogin,
    userForgetPassword,
    userverifyEmail,
    userverifyForgetPassword
}
