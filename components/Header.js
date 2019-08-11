import React, { Component } from 'react';
import Logo from './Logo'
import Navigation from './Navigation'

export default () => {
    return (
        <div id="head">
            <Logo />
            <Navigation />
            <style jsx>{`
            #head {
                display: flex;
                position: relative;
                transition: all 300ms;
                text-align: center;
                height: 75px;
                background: linear-gradient(to bottom, rgba(23,23,23, 0.3) 0%, rgba(23,23,23, 0) 100%);
                padding: 20px 0 30px;
                margin: 5em 0;
            }
            `}</style>
        </div>
    )
}