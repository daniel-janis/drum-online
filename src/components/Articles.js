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

function Articles() {

    if (!UserService.get().username) {
        AuthService.auth()
    }

    const [ allArticles, setAllArticles ] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/api/getArticles")
        .then((req, res) => {
                setAllArticles(
                    req.data.map((article, index) => {
                        return(
                            <div className="article" key={index}>
                                <div>
                                    <h2><a href={article.articleLink} rel="noreferrer" target="_blank">{article.articleTitle}</a></h2>
                                </div>
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
                            <h1>Articles</h1>
                        </div>
                        <div className="contentContainer">
                            <div className="articlesAndRudiments">
                                
                                { allArticles }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
};

export default Articles;