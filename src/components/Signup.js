import './Styles.css';
import React from 'react';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import { GiDrumKit } from 'react-icons/gi';
import axios from 'axios';

function Signup () {

    const postUser = (event) => {
        event.preventDefault()
        var fName = event.target.firstName.value
        var lName = event.target.lastName.value
        var uName = event.target.userName.value
        var email = event.target.email.value
        var pWord = event.target.password.value
        axios.post("http://localhost:3001/api/postNewUser", {
            firstName:fName,
            lastName:lName,
            userName:uName,
            email:email,
            password:pWord
        })
        .then((req, res) => {
            console.log(req.data)
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
                    <div className="profile-pic">
                        <IconContext.Provider value={{ size:"100px "}}>
                            <CgProfile />
                        </IconContext.Provider>
                    </div>
                    <div className="userName">test</div>
                    <div className="login-signup"><Link to="/Login">Login/Sign-Up</Link></div>
                    <div className="logout">Logout</div>
                    <div className="navigation">
                        <Link to="/profile">Profile</Link>
                        <Link to="/homepage">Homepage</Link>
                        <Link to="/articles">Articles</Link>
                        <Link to="/videos">Videos</Link>
                    </div>
                </div>
                <div className="main-body">
                    <div className="header">
                        <div className="logoAndTitle">
                        <IconContext.Provider value={{ size:"75px", color:"white"}}>
                            <div className="logo">
                                <Link to="/homepage">
                                    <GiDrumKit />
                                </Link>
                            </div>
                        </IconContext.Provider>
                            <div className="title"><h1>Drum Online</h1></div>
                        <IconContext.Provider value={{ size:"75px", color:"white"}}>
                            <div className="logo">
                                <Link to="/homepage">
                                    <GiDrumKit />
                                </Link>
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
                                            <input name="password" />
                                            
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