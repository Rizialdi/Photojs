import React, { Component } from 'react';

export default () => {
    return (
        <div>
            <header className="v-header container">
                <div className="fullscreen-video-wrap">
                    <video src="../static/videos/loop_video.mp4" autoplay="true" loop={"true"}>
                    </video>
                </div>
                <div className="header-overlay"></div>
                <div className="header-content">
                    <div className="header-photo">
                        <img src="../static/images/avatar.png"
                            alt="avatar_photographe"
                            className="avatar" />
                    </div>
                    <h1>Salut.</h1>
                    <p>
                        Je suis un passionné de la photographie et votre satisfaction est mon but.
                    </p>
                    <SocialLink />
                    <a className="btn"> Découvrir </a>
                </div>
            </header>
            <style jsx>{`
                *{
                    box-sizing: border-box;
                    }

                .v-header{
                    height:100vh;
                    display:flex;
                    justify-content: center;
                    color:#fff;
                    }

                .container{
                    max-width:960px;
                    padding-left:1rem;
                    padding-right:1rem;
                    margin:auto;
                    text-align:center;
                    }

                .fullscreen-video-wrap{
                    position:absolute;
                    top:0;
                    left:0;
                    width:100%;
                    height:100vh;
                    overflow:hidden;
                    }

                    .fullscreen-video-wrap video{
                    min-height:100%;
                    min-width:100%;
                    }

                    .header-overlay{
                    height:100vh;
                    position: absolute;
                    top:0;
                    left:0;
                    width:100vw;
                    z-index:1;
                    background:#225470;
                    opacity:0.40;
                    }

                    .header-content{
                    z-index:2;
                    margin: 0 auto;
                    }

                    .header-content h1{
                    font-size:10vh;
                    margin-bottom:0;
                    display: block;
                    }

                    .header-content p{
                    font-size:2vh;
                    display:block;
                    padding-bottom:2rem;
                    }

                    .header-content .header-photo {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 25vh;
                        height: 25vh;
                        margin: 0 auto;
                        border-radius: 50%;
                        overflow: hidden;
                        background-color: white;
                        opacity: 1;
                        transition: opacity 1s ease;
                    }

                    .header-content .header-photo:hover {
                        opacity: 0.5;
                    }

                    .header-content .avatar {
                        max-width: 100%;
                        width: 20vh;
                        height: auto;
                        background-size: cover;
                        background-position: center;
                        background-repeat: no-repeat;
                    }

                    .btn{
                    background: #34b3a0;
                    color:#fff;
                    font-size:2vh;
                    padding: 1vh 2vh;
                    text-decoration: none;
                    margin: 3em auto;
                    border-radius: 10px
                    }

                    @media(max-width:960px){
                    .container{
                        padding-right:3rem;
                        padding-left:3rem;
                    }
                    }
            `}</style>
        </div>
    )
}

const SocialLink = (props) => {
    return (
        <div>
            <ul className="container">
                <li className="item">
                    <a href="https://www.facebook.com">
                        <img src="../static/images/facebook_icon.png" alt="facebook_icon"/>
                    </a>
                </li>
                <li className="item">
                    <a href="https://www.instagram.com">
                        <img src="../static/images/instagram_icon.png" alt="instagram_icon"/>
                    </a>
                </li>
                
            </ul>
            <style jsx>{`
            .container {
                padding-bottom: 5em;
                padding-left: 0;
                margin: 0 auto;
                list-style: none;
                display: flex;
                justify-content: center;
                    }

            .item {
                background: transparent;
                padding: 5px;
                width: 60px;
                height: 50px;
                margin: 5px;
                line-height: 50px;
                color: white;
                font-weight: bold;
                font-size: 2em;
                text-align: center;
                    }
            a {
                background: "white";
                border-radius: "50%";
                overflow: "hidden"}
            }
            `}</style>
        </div>
    )
}