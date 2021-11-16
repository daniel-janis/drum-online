import './Styles.css';
import React from 'react';
import axios from 'axios';
import UserService from './UserService';
import AuthService from './AuthService';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import { GiDrumKit } from 'react-icons/gi';

function Videos() {

    if (!UserService.get().username) {
        AuthService.auth()
    }

    const [ allVideos, setAllVideos ] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/api/getVideos")
        .then((req, res) => {
                setAllVideos(
                    req.data.map((video, index) => {
                        return(
                                <div className="video" key={index}>
                                    <img src={`https://drum-online-pictures.s3.us-east-2.amazonaws.com/${video.videoThumbnailS3}`} alt="Video Thumbnail" className="thumbnails"/>
                                    <h2><a href={video.videoLink} rel="noreferrer" target="_blank">{video.videoTitle}</a></h2>
                                </div>
                        )
                    }
                )
            )
        })
        .catch((err) => console.log(err))
    },[])

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
                    <div className="userName">{UserService.get().username}</div>
                    <div className="logout" onClick={AuthService.logout}>Logout</div>
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
                            <h1>Video Lessons</h1>
                        </div>
                        <div className="contentContainer">
                            {allVideos}
                        </div>
                    </div>
                </div>
            </div>
        )
};

export default Videos;