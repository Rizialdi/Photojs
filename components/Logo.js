import React, { Component } from 'react';

export default () => {
    return (
        <div id="marque_site">
            <div>
                <div id="site_detail">
                    <img src="../static/images/logo.png"/>
                    <h3>N Shoot</h3>
                </div>
            </div>
            <style jsx>{`
            #marque_site {
                flex: 0 1 auto;
                padding: 0 10px;
                float: left;
                text-align: left;
                margin-left: 50px;
            }

            #site_detail {
                display: inline-block;
                padding: 0 0;
                text-align: left;
                vertical-align: middle;
            }

            h3 {
                line-height: 0;
                text-transform: capitalize;
                font-family: 'Manjari';
                font-weight: 400;
            }

            img {
                height: 5em;
                width: auto
            }
            `}</style>
        </div>
    )
}