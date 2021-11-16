import './Styles.css';
import React from 'react';
import UserService from './UserService';
import { Link, useHistory } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { GiDrumKit } from 'react-icons/gi';
import axios from 'axios';
import AuthService from './AuthService';


function Login () {

    let history = useHistory();

    const login = (event) => {
        event.preventDefault()
        var uName = event.target.userName.value
        var pWord = event.target.password.value
        axios.post("http://localhost:3001/api/login", {
            userName:uName,
            passWord:pWord
        })
        .then((res) => {
            if (res.data.user) {
                console.log('User Logged In Successfully')
                AuthService.setToken(res.data.token)
                UserService.set(res.data.user)
                history.push('/Homepage')
                console.log(UserService.get())
            } else {
                console.log(res.data)
            }
        })
        event.target.userName.value = '';
        event.target.password.value = '';
    }
    
        return (
            //Homepage structure = Navigation Sidebar on left, Main page to the right.
            //Sidebar oriented vertically, navigation is to other components
            <div className="full-page">
                <div className="sidebar"> 
                    <div className="profile-pic"></div>
                    <div className="userName"></div>
                    <div className="login-signup"></div>
                    <div className="logout"></div>
                    <div className="navigation"></div>
                </div>
                <div className="main-body">
                    <div className="header">
                        <div className="logoAndTitle">
                        <IconContext.Provider value={{ size:"75px", color:"white"}}>
                            <div className="logo"> 
                                    <GiDrumKit />
                            </div>
                        </IconContext.Provider>
                            <div className="title"><h1>Drum Online</h1></div>
                        <IconContext.Provider value={{ size:"75px", color:"white"}}>
                            <div className="logo">
                                    <GiDrumKit />
                            </div>
                        </IconContext.Provider>
                        </div>  
                    </div>
                    <div className="pageContent">
                        <div className="contentHeader">
                            <div><h1>Login</h1></div>
                        <div>Not registered? <Link to="/Signup">Sign up!</Link></div>
                        </div>
                        <div className="contentContainerCentered">
                        <div className="login-box">
                                <h3>User Login</h3>
                                <form className="login-form" onSubmit={login}>
                                    <fieldset>
                                        <label>
                                            <p>Username</p>
                                            <input name="userName" />
                                        </label>
                                        <label>
                                            <p>Password</p>
                                            <input name="password" type="password" />
                                        </label>
                                    </fieldset>
                                    <button className="submit-btn" type="submit">Log In</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
};

export default Login;