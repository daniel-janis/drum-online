import './Styles.css';
import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import { GiDrumKit } from 'react-icons/gi';

function Homepage () {

    const [ featuredArticle, setFeaturedArticle ] = useState([]);
    const [ featuredVideo, setFeaturedVideo ] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/api/getFeaturedArticle")
        .then((req, res) => {
            console.log(req.data)
                setFeaturedArticle(
                    req.data.map((lesson, index) => {
                        return(
                            <div className="featuredArticle" key={index}>
                                <div>
                                    <h2><a href={lesson.articleLink} rel="noreferrer" target="_blank">{lesson.articleTitle}</a></h2>
                                </div>
                            </div>
                        )
                    }
                )
            )
        })
        .catch((err) => console.log(err))
        axios.get("http://localhost:3001/api/getFeaturedVideo")
        .then((req, res) => {
            console.log(req.data)
            setFeaturedVideo(
                req.data.map((lesson, index) => {
                    return(
                        <div className="featuredVideo" key={index}>
                            <img src={lesson.videoThumbnail} alt="Video Thumbnail" className="thumbnails"/>
                            <h2><a href={lesson.videoLink} rel="noreferrer" target="_blank">{lesson.videoTitle}</a></h2>
                        </div>
                    )
                })
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
                            <h1>Featured Lesson</h1>
                        </div>
                        <div className="contentContainer">
                            <div className="featuredLesson">
                                { featuredArticle }
                                { featuredVideo }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
};

export default Homepage;