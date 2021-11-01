import './Styles.css';
import React from 'react';

class Homepage extends React.Component {
    render() {
        return (
            <div className="full-page">
                <div className="sidebar">
                    <div className="profile-pic"></div>
                    <div className="Login-Signup"></div>
                    <div className="Logout"></div>
                    <div className="navigation">
                        <a>Profile</a>
                        <a>Featured</a>
                        <a>Favorites</a>
                        <a>Recents</a>
                        <a>Articles</a>
                        <a>Videos</a>
                    </div>
                </div>
                <div className="header">
                    <div className="logoAndTitle">
                        <div className="logo"></div>
                        <div className="title">Drum Online</div>
                    </div>  
                </div>
            </div>
        )
    }
};

export default Homepage;