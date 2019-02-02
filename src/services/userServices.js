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
            window.location.href = '/dashboard'
        })
        .catch(function (err) {
            toast("Login Unsuccessful.....", { position: toast.POSITION.BOTTOM_CENTER });
            console.log(err);
        });
}
function userForgetPassword(email) {
    console.log('59--userService---FE--emial: ',email);
    axios.post('/forgetpassword',
        {
            'email': email
        })
        .then(function (response) {
            alert('Please Check your email for verification')
            console.log(response);
        })
        .catch(function (err) {
            console.log(err);
        });
}
function userverifyEmail(token) {
    console.log('77--inside user service.js--- FE :', token); // getting token
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

function userResetPwd(password, token) {
    console.log('115---userService.js---FE--password :', password);
    // console.log('116---userService.js---FE--confirmpassword :', confirmpassword);
    axios.post(`/resetPassword/${token}`, { 'password': password }, {
        headers: {
            'token': token
        }
    })
        .then(function (response) {
            console.log(response);
            console.log('120---userServices.js---FE----response : ', response);
            alert('password successfully reset....');
            window.location.href = '/login'
        })
        .catch(function (err) {
            console.log(err);
            alert('process unsuccessful');
        });
}
export {
    userRegister,
    userLogin,
    userForgetPassword,
    userverifyEmail,
    userResetPwd
}
