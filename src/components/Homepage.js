import './Styles.css';
import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import { GiDrumKit } from 'react-icons/gi';

class Homepage extends React.Component {
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
                    <div className="login-signup">Login/Sign-Up</div>
                    <div className="logout">Logout</div>
                    <div className="navigation">
                        <a>Profile</a>
                        <a>Featured</a>
                        <a>Favorites</a>
                        <a>Recents</a>
                        <a>Articles</a>
                        <a>Videos</a>
                    </div>
                </div>
                <div className="main-body">
                    <div className="header">
                        <div className="logoAndTitle">
                        <IconContext.Provider value={{ size:"75px", color:"white"}}>
                            <div className="logo"><GiDrumKit /></div>
                        </IconContext.Provider>
                            <div className="title"><h1>Drum Online</h1></div>
                        </div>  
                    </div>
                </div>
            </div>
        )
    }
};

export default Homepage;