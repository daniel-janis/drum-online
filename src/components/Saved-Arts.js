import './Styles.css';
import React from 'react';
import Drumset from '../images/under-construction.jpeg';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import { GiDrumKit } from 'react-icons/gi';

class SavedArts extends React.Component {
    render() {
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
                            <h1>Your Articles</h1>
                        </div>
                        <div className="contentContainer">
                            <div>
                                This page is still under construction
                            </div>
                            <img src={Drumset} alt="Assembling Drumset" className="undoneDrums" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default SavedArts;