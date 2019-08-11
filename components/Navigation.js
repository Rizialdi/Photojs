import React, { Component } from 'react';
import Link from './ActiveLink'


export default () => {
    return (
        <div id="navigation">
        <nav>
            <ul>
                <Link activeClassName="active" href="/">
                        <a></a>
                </Link>
                <Link activeClassName="active" href="/Accueil">
                    <a>Accueil</a>
                </Link>
                <Link activeClassName="active" href="/Services">
                    <a>Services</a>
                </Link>
                <Link activeClassName="active" href="/Contacts">
                    <a>Contacts</a>
                </Link>
            </ul>
        </nav>
        <style jsx>{`
            #navigation {
                flex: 1;
                display: inline-block;
                text-align: center;
                line-height: 1.7;
                margin-bottom: 10em
            }

            nav {
                display: block;
                text-align: center;
            }

            ul {
                position: relative;
                top: 50%;  
                list-style: none;
                text-align: center;
                cursor: pointer;
            }
            li {
                position: relative;
                display: inline-block;
                margin-left: 1em;
            }

            .active {
                color: #fd513b;
                font-weight: bold;
            }

            a {
            font-family: "Sofia";
            font-size: 16px;
            font-weight: 500;
            letter-spacing: 0.2px;
            line-height: 50px;
            padding: 0 10px;
            text-align: left;
            text-transform: uppercase;
            text-decoration: none;
            transition-property: color;
            transition-duration: 0.6s;
            transition-timing-function: linear;
            color: black;
            }

            a:hover {
                color: #fd513b;
            }
        `}</style>
    </div>
    )
}