import './Styles.css';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { GiDrumKit } from 'react-icons/gi';
import axios from 'axios';

function Signup () {

    let history = useHistory();

    const postUser = (event) => {
        event.preventDefault()
        var fName = event.target.firstName.value
        var lName = event.target.lastName.value
        var uName = event.target.userName.value
        var email = event.target.email.value
        var pWord = event.target.password.value
        axios.post("http://localhost:3001/api/register", {
            firstName:fName,
            lastName:lName,
            userName:uName,
            eMail:email,
            passWord:pWord
        })
        .then((res) => {
            if (res.data === "Success") {
                console.log('User registered')
                history.push('/Login')
            } else {
                console.log(res.data)
            }
        })
        event.target.firstName.value = '';
        event.target.lastName.value = '';
        event.target.userName.value = '';
        event.target.email.value = '';
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
                            <h1>Sign Up</h1>
                        </div>
                        <div className="contentContainerCentered">
                            <div className="signup-box">
                                <h3>New User Registration</h3>
                                <form className="signup-form" onSubmit={postUser}>
                                    <fieldset>
                                        <label>
                                            <p>First Name</p>
                                            <input name="firstName" />
                                            
                                        </label>
                                        <label>
                                            <p>Last Name</p>
                                            <input name="lastName" />
                                            
                                        </label>
                                        <label>
                                            <p>Username</p>
                                            <input name="userName" />
                                            
                                        </label>
                                        <label>
                                            <p>Email</p>
                                            <input name="email" />
                                            
                                        </label>
                                        <label>
                                            <p>Password</p>
                                            <input name="password" type="password" />
                                            
                                        </label>
                                    </fieldset>
                                    <button className="submit-btn" type="submit">Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
};

export default Signup;